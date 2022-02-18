import { IAuthType } from 'src/contracts/auth'
import { useGetMe, useLoggedIn } from 'src/lib/gqls/auth/hooks'

export const useAuth = ({ withRedirect = true }: IAuthType = {}): any => {
	const { data: isLoggedIn, loading: isLoggedInLoading } = useLoggedIn({ withRedirect })
	const { data: meData, loading: getMeLoading, client } = useGetMe()

	return {
		isLoggedIn,
		meData,
		loading: isLoggedInLoading || getMeLoading,
		client,
	}
}
