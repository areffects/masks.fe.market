import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
	{
		findAllUsersProducts {
			_id
			name
			type
			createdAt
		}
	}
`
export const CREATE_PRODUCT = gql`
	mutation create($name: String!, $description: String!, $type: UsersProductsTypes) {
		createUsersProducts(data: { name: $name, description: $description, type: $type }) {
			_id
			type
		}
	}
`

export const DELETE_PRODUCT = gql`
	mutation delete($id: String!) {
		deleteUsersProducts(id: $id)
	}
`
