import { ReactElement } from 'react'
import styled from 'styled-components'

const CrossButton = styled.button``

const BackgroundDialog = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
`
const DialogBlock = styled.div`
	border-radius: 5px;
	padding: 10px;
	position: absolute;
	display: flex;
	flex-direction: column;
	color: black;
	width: 200px;
	height: 200px;
	background: white;
	justify-content: space-between;
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`

const ActionsButtonsBlock = styled.div`
	display: flex;
	justify-content: flex-end;
`
const ActionButton = styled.button`
	margin-left: 20px;
`

const ContentBlock = styled.div``

const Dialog = ({ isOpen, children, onCancel, onSubmit }: any): ReactElement => {
	return (
		isOpen && (
			<>
				<BackgroundDialog>
					<DialogBlock>
						<Header>
							Dialog
							<CrossButton onClick={onCancel}>X</CrossButton>
						</Header>

						<ContentBlock>{children}</ContentBlock>
						<ActionsButtonsBlock>
							<ActionButton onClick={onCancel}>Close</ActionButton>
							<ActionButton onClick={onSubmit}>Submit</ActionButton>
						</ActionsButtonsBlock>
					</DialogBlock>
				</BackgroundDialog>
			</>
		)
	)
}

export { Dialog }
