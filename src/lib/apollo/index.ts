import { IncomingMessage, ServerResponse } from 'http'
import { useMemo } from 'react'
import { ApolloClient, ApolloLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

import { IS_LOGGED_IN } from 'src/lib/gqls/auth/query'
import { AUTH_TOKEN } from 'src/constants/storage/ls'
import { onErrorLink } from './links/errors'
import { authLink } from './links/auth'
import { httpLink } from './links/http'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export type ResolverContext = {
	req?: IncomingMessage
	res?: ServerResponse
}

// const contextLink = () =>
const createIsomorphLink = (context: ResolverContext = {}): ApolloLink => {
	if (typeof window === 'undefined') {
		const { SchemaLink } = require('apollo-link-schema')
		const { schema } = require('./schema')
		return new SchemaLink({ schema, context })
	} else {
		return ApolloLink.from([onErrorLink, authLink, httpLink])
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
		const token = localStorage.getItem(AUTH_TOKEN)
		if (token) {
			cache.writeQuery({
				query: IS_LOGGED_IN,
				data: {
					isLoggedIn: token,
				},
			})
		}
	}
	return new ApolloClient({
		defaultOptions: {
			query: {
				errorPolicy: 'all',
			},
			mutate: {
				errorPolicy: 'all',
			},
		},
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
