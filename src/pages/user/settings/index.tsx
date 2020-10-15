import { useAuth } from 'src/hooks/useAuth'

const User: React.FC = () => {
	const data = useAuth()
	// eslint-disable-next-line no-console
	console.log(data)
	return <div>Profile</div>
}
export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}

export default User
