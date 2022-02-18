import Router from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import { ROUTES } from 'src/constants/paths'
import { AUTH_TOKEN } from 'src/constants/storage/ls'
import { useQuery, QueryResult } from '@apollo/react-hooks'
import { IAuthType } from 'src/contracts/auth'
import { IS_LOGGED_IN, GET_ME, LOGIN_USER, REGISTER_USER } from 'src/lib/gqls/auth/query'
import { globalNotify } from 'src/utils/notifications'

export const useGetMe = (): QueryResult =>
	useQuery(GET_ME, {
		displayName: 'name',
		// variables: { v: Math.random() },
	})

export const useLoggedIn = ({ withRedirect = true }: IAuthType = {}): any =>
	useQuery(IS_LOGGED_IN, {
		onCompleted: (isLoggedInData) => {
			if (withRedirect && (!isLoggedInData || !isLoggedInData?.isLoggedIn)) {
				return Router.push(ROUTES.AUTH_SIGN_IN)
			}
			return true
		},
	})

export const useLoginUser = (): any => {
	const [loginUser, { loading }] = useMutation(LOGIN_USER, {
		update: (cache, { data: { loginUser } }) => {
			// const { variables } = cache.watches.values().next().value
			// const data = cache.readQuery({ query: IS_LOGGED_IN })
			// console.log('data :>> ', data)

			cache.writeQuery({
				query: IS_LOGGED_IN,
				data: {
					isLoggedIn: loginUser.token,
				},
			})
			localStorage.setItem(AUTH_TOKEN, loginUser.token)
			Router.push(ROUTES.PROFILE)
		},
	})
	return { loginUser, loading }
}

export const useResetPasswordUser = (): any => {
	return { loading: 'loading', resetPassword: 'resetPassword' }
}

export const useRegisterUser = (): any => {
	const [registerUser, { loading }] = useMutation(REGISTER_USER, {
		onCompleted() {
			globalNotify({ type: 'success', header: 'User created!' })
			Router.push(ROUTES.AUTH_SIGN_IN)
		},
	})
	return { registerUser, loading }
}
