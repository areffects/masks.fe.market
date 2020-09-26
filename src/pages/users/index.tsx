import {
	// useMutation,
	useQuery,
} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React, { ReactElement, useState } from 'react'
import { Dialog } from 'src/components/Dialog'
import styled from 'styled-components'

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

// const UPDATE_USER = gql`
// 	mutation update {
// 		updateUser(id: "5f60efb0e62c21002c9fac12") {
// 			_id
// 			userId
// 			type
// 			amount
// 		}
// 	}
// `

// const DELETE_USER = gql`
// 	mutation delete {
// 		deleteUser(id: "5f60a4eed4b55f00300fb7cd")
// 	}
// `
const UserBlock = styled.div`
	margin-bottom: 20px;
	border: 1px solid gray;
	padding: 10px 15px;
	border-radius: 30px;
	display: flex;
	justify-content: space-between;
`
const ActionsBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`
const Users = (): ReactElement | null | string => {
	const [isEditOpen, setEditIsOpen] = useState(false)
	// useMutation()
	const { loading, error, data } = useQuery(GET_USERS)
	if (loading) return <div>Loading...</div>
	if (error) return `Error! ${error}`
	const { findAllUser } = data
	const handleEdit = (id: string) => {
		setEditIsOpen(true)
		return id
	}
	const handleCloseDialog = () => {
		setEditIsOpen(false)
	}
	const handleSubmitEditDialog = (values: any) => {
		return values
	}
	const handleSubmitDeleteDialog = (values: any) => {
		return values
	}
	return (
		<div>
			{findAllUser.map(({ userName, role, _id }: any, index: number) => (
				<UserBlock key={index}>
					<div>
						<p>User name: {userName}</p>
						<p>Role: {role}</p>
					</div>
					<ActionsBlock>
						<a href="#" onClick={() => handleEdit(_id)}>
							Edit
						</a>
						<a href="#">Delete</a>
					</ActionsBlock>
				</UserBlock>
			))}
			<Dialog onCancel={handleCloseDialog} onSubmit={handleSubmitEditDialog} isOpen={isEditOpen}>
				{'Hello world'}
			</Dialog>
			<Dialog onCancel={handleCloseDialog} onSubmit={handleSubmitDeleteDialog} isOpen={isEditOpen}>
				{'Delete user?'}
			</Dialog>
		</div>
	)
}

export default Users
