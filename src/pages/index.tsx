import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import { GET_PRODUCTS } from 'src/lib/gqls/products'

const Marketplace: React.FC = () => {
	const { loading, error, data } = useQuery(GET_PRODUCTS)
	if (loading) return <div>Loading...</div>
	if (error) return <div>{`${error}`}</div>
	const { findAllUsersProducts } = data
	return (
		<div>
			{findAllUsersProducts.map(({ userName, role }: any, index: number) => (
				<div key={index}>
					<p>User name: {userName}</p>
					<p>Role: {role}</p>
				</div>
			))}
		</div>
	)
}
export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}
export default Marketplace
