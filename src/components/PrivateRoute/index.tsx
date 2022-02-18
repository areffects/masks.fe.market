import { useLoggedIn } from 'src/lib/gqls/auth/hooks'
import FullLoader from '../Loaders/FullLoader'

const PrivateRoute: React.FC = ({ children }) => {
	const { loading, data } = useLoggedIn()
	return (
		<>
			{loading || (!loading && !data && <FullLoader />)}
			{children}
		</>
	)
}

export default PrivateRoute
