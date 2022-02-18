import { isDevelopment } from 'apollo-utilities'
import { GraphQLError } from 'graphql'
import Router from 'next/router'
import { STATUSES } from 'src/constants/common/statuses'
import { ROUTES } from 'src/constants/paths'
import { globalNotifyErrorHandler } from '../../../helpers/notification'
import { onError } from '@apollo/client/link/error'

export const handler = (graphqlError: GraphQLError): void => {
	const { message, locations, path, extensions } = graphqlError
	if (isDevelopment()) {
		globalNotifyErrorHandler(graphqlError)
	}
	if (STATUSES.UNAUTHORIZED === extensions?.exception.status) {
		Router.push(ROUTES.AUTH_SIGN_IN)
	}
	console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
}

export const errorHandler = (graphQLErrors: ReadonlyArray<GraphQLError>): void => {
	graphQLErrors.map((error) => handler(error))
}

export const onErrorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		errorHandler(graphQLErrors)
	}

	if (networkError) {
		if (isDevelopment()) {
			globalNotifyErrorHandler(networkError)
		}
		console.error(`[Network error]: ${networkError}`)
	}
})

// export default onError({ graphQLErrors, networkError, operation, forward }:any) => {
// 	console.log('graphQLErrors, networkError, operation, forward :>> ', graphQLErrors, networkError, operation, forward);
// if (graphQLErrors) {
// 	for (let err of graphQLErrors) {
// 		// handle errors differently based on its error code
// 		switch (err.extensions.code) {
// 			case 'UNAUTHENTICATED':
// 				// old token has expired throwing AuthenticationError,
// 				// one way to handle is to obtain a new token and
// 				// add it to the operation context
// 				const headers = operation.getContext().headers
// 				operation.setContext({
// 					headers: {
// 						...headers,
// 						authorization: getNewToken(),
// 					},
// 				});
// 				// Now, pass the modified operation to the next link
// 				// in the chain. This effectively intercepts the old
// 				// failed request, and retries it with a new token
// 				return forward(operation);

// 			// handle other errors
// 			case 'ANOTHER_ERROR_CODE':
// 				// ...
// 		}
// 	}
// }
// }
