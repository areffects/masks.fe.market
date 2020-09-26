import gql from 'graphql-tag'

export const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(data: { email: $email, password: $password }) {
			token
		}
	}
`

export const REGISTER_USER = gql`
	mutation registerUser(
		$userName: String!
		$firstName: String!
		$lastName: String!
		$email: String!
		$password: String!
	) {
		registerUser(
			data: {
				userName: $userName
				firstName: $firstName
				lastName: $lastName
				email: $email
				password: $password
			}
		) {
			_id
			avatarId
			status
			userName
			role
		}
	}
`
