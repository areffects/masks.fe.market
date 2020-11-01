import { authWrap } from 'src/helpers/auth'
import { setContext } from '@apollo/client/link/context'

export const authLink = setContext((_, { headers }) => authWrap({ headers }))
