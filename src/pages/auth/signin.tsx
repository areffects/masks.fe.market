// import React, { ReactElement } from 'react'
// import Button from 'src/components/Form/Button'
// import TextInput from 'src/components/Form/TextInput'
// import Icon from 'src/components/Icon/Icon'
// import styled from 'styled-components'
// // import googleIcon from 'src/components/Icon/icons/google.svg'
// // import { ReactSVG } from 'react-svg'

// const WrapContainer = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	height: 100vh;
// 	width: 100vw;
// `

// const ContainerAuthBlock = styled.div`
// 	padding: 24px 32px;
// 	position: absolute;
// 	display: flex;
// 	width: 400px;
// 	flex-direction: column;
// 	box-shadow: 0px 0.4rem 1rem rgba(0, 0, 0, 0.25);
// 	border-radius: 0.5rem;
// `
// const AuthHeader = styled.div`
// 	font-family: 'HelveticaNeueBoldCondensed';
// 	font-size: 2.4rem;
// 	text-align: center;
// `
// const Label = styled.label`
// 	font-size: 1.4rem;
// 	margin-bottom: 0.5rem;
// `
// const Link = styled.a`
// 	color: ${({ theme }) => theme.color.linkBlue};
// `
// const Center = styled.p`
// 	text-align: center;
// `
// const ActionButtonBlock = styled.div`
// 	display: flex;
// 	justify-content: flex-end;
// 	margin-bottom: 2.4rem;
// `
// const SignIn = (): ReactElement => {
// 	return (
// 		<WrapContainer>
// 			<ContainerAuthBlock>
// 				<AuthHeader>Sign in!</AuthHeader>
// 				<Label>Login:</Label>
// 				<TextInput type="text" placeholder="Type here..." />
// 				<Label>Password:</Label>
// 				<TextInput type="text" placeholder="Type here..." />
// 				<Link>Forgot password?</Link>
// 				<ActionButtonBlock>
// 					<Button>LOGIN</Button>
// 				</ActionButtonBlock>
// 				{/* <ReactSVG src={googleIcon} /> */}
// 				<Icon name="google"></Icon>
// 				<Center>
// 					Don't have an account?<Link>Register here</Link>
// 				</Center>
// 			</ContainerAuthBlock>
// 		</WrapContainer>
// 	)
// }

// export default SignIn
