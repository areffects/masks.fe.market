import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { IS_LOGGED_IN } from 'src/lib/gqls/auth'
import { AUTH_SIGN_IN } from 'src/constants/paths'

const useAuth = (): any => {
	const { data } = useQuery(IS_LOGGED_IN)
	const router = useRouter()
	useEffect(() => {
		if (data && !data.isLoggedIn) {
			router.push(AUTH_SIGN_IN)
		}
	}, [])
	return { isLoggedIn: data && data.isLoggedIn }
}

export { useAuth }
