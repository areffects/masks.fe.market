import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React, { ReactElement } from 'react'

const GET_USERS = gql`
	{
		findAllUser {
			_id
			userName
			role
			status
		}
	}
`
const Products = (): ReactElement | null | string => {
	const { loading, error, data } = useQuery(GET_USERS)
	if (loading) return <div>Loading...</div>
	if (error) return `Error! ${error}`
	const { findAllUser } = data

	return (
		<div>
			{findAllUser.map(({ userName, role }: any, index: number) => (
				<div key={index}>
					<p>User name: {userName}</p>
					<p>Role: {role}</p>
				</div>
			))}
		</div>
	)
}

export default Products
