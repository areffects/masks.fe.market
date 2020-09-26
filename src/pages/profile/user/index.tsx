import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'
import { IS_LOGGED_IN } from 'src/constants/graphql/queries'
import { PRODUCTS } from 'src/constants/paths'

const User = (): ReactElement => {
	const {
		data: { isLoggedIn },
	} = useQuery(IS_LOGGED_IN)
	const router = useRouter()
	useEffect(() => {
		if (!isLoggedIn) {
			router.push(PRODUCTS)
		}
	}, [])
	return <div>Profile</div>
}
export default User
