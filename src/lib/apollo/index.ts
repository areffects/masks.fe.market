import { IncomingMessage, ServerResponse } from 'http'
import { useMemo } from 'react'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { IS_LOGGED_IN } from 'src/lib/gqls/auth'
import { AUTH_TOKEN } from 'src/constants/storage/ls'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export type ResolverContext = {
	req?: IncomingMessage
	res?: ServerResponse
}

const createIsomorphLink = (context: ResolverContext = {}) => {
	if (typeof window === 'undefined') {
		const { SchemaLink } = require('apollo-link-schema')
		const { schema } = require('./schema')
		return new SchemaLink({ schema, context })
	} else {
		const { HttpLink } = require('apollo-link-http')
		const token = localStorage.getItem(AUTH_TOKEN)
		return new HttpLink({
			uri: 'http://localhost:4000/graphql',
			credentials: 'same-origin',
			headers: {
				authorization: token ? `Bearer ${token}` : '',
			},
		})
	}
}

const createApolloClient = (context?: ResolverContext) => {
	const cache = new InMemoryCache({
		typePolicies: {
			loginUser: {
				keyFields: ['loginUser'],
			},
		},
	})
	if (typeof window !== 'undefined') {
		cache.writeQuery({
			query: IS_LOGGED_IN,
			data: {
				isLoggedIn: !!localStorage.getItem(AUTH_TOKEN),
			},
		})
	}

	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: createIsomorphLink(context),
		cache,
	})
}

export const initializeApollo = (
	initialState: any = null,
	// Pages with Next.js data fetching methods, like `getStaticProps`, can send
	// a custom context which will be used by `SchemaLink` to server render pages
	context?: ResolverContext,
): ApolloClient<any> => {
	const _apolloClient = apolloClient ?? createApolloClient(context)
	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// get hydrated here
	if (initialState) {
		_apolloClient.cache.restore(initialState)
	}
	// For SSG and SSR always create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient
	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient

	return _apolloClient
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useApollo = (initialState: any): ApolloClient<any> => {
	const store = useMemo(() => initializeApollo(initialState), [initialState])
	return store
}
