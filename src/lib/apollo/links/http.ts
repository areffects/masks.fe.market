import { createHttpLink } from '@apollo/react-hooks'
import { GRAPHQL_URI } from 'src/utils/config'

export const httpLink = createHttpLink({
	uri: GRAPHQL_URI,
	credentials: 'same-origin',
})
