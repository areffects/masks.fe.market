import gql from 'graphql-tag'

export const GET_USERS = gql`
	{
		findAllUser {
			_id
			userName
			role
			status
		}
	}
`
