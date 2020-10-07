import styled from 'styled-components'
import React, { ReactElement, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from 'src/components/Form/Button'
import TextInput from 'src/components/Form/TextInput'
import { SmallErrorMessage } from 'src/components/Form/ErrorMessage'
import Link from 'src/components/Link'
import { useMutation } from '@apollo/react-hooks'
import { emailValidator, passwordValidator } from 'src/utils/validators'
import { AUTH_SIGN_UP } from 'src/constants/paths'
import { withTranslation } from '../../../i18n.js'
import Lang from 'src/components/Lang'
import { LOGIN_USER } from 'src/lib/gqls/users'
import Icon from 'src/components/Icon/Icon'

const WrapContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
`

const ContainerAuthBlock = styled.form`
	padding: 24px 32px;
	position: absolute;
	display: flex;
	width: 400px;
	flex-direction: column;
	box-shadow: 0px 0.4rem 1rem rgba(0, 0, 0, 0.25);
	border-radius: 0.5rem;
`

const AuthHeader = styled.div`
	font-family: 'HelveticaNeueBoldCondensed';
	font-size: 2.4rem;
	text-align: center;
	margin-bottom: 0.8rem;
`

const Center = styled.p`
	text-align: center;
`

const SocBlock = styled.div`
	display: flex;
	margin-bottom: 2.4rem;
	svg {
		margin-right: 1rem;
	}
`

const LoginBlock = styled.div`
	display: flex;
	margin-top: 1.8rem;
	justify-content: space-between;
`

const SignIn = ({ t }: any): ReactElement => {
	const [error, setError] = useState('')

	const [
		loginUser,
		{
			// data,
			loading,
		},
	] = useMutation(LOGIN_USER, {
		update() // cache,
		// {
		// 	data: {
		// 		loginUser: { token },
		// 	},
		// },
		{
			// cache.modify({
			// 	fields: {
			// 		loginUser(value, details) {
			// 			console.log('value :>> ', value)
			// 			console.log('details :>> ', details)
			// 			return token
			// 		},
			// 	},
			// })
		},
		onError(error) {
			setError(error.message)
		},
		onCompleted() {
			setError('')
		},
	})
	const { handleSubmit, register, errors } = useForm()
	const handleLogin = ({ email, password }: { email: string; password: string }) => {
		loginUser({ variables: { email, password } })
	}
	return (
		<WrapContainer>
			<ContainerAuthBlock onSubmit={handleSubmit(handleLogin)}>
				<AuthHeader>{t('signIn')}</AuthHeader>
				<TextInput
					label="email"
					type="text"
					name="email"
					register={register}
					patternValue={emailValidator}
					patternMessage={'invalidEmail'}
					placeholder={'typeHere'}
					errors={errors}
				/>
				<Lang />
				<TextInput
					label="password"
					name="password"
					type="password"
					register={register}
					patternValue={passwordValidator}
					patternMessage={'invalidPassword'}
					placeholder={'typeHere'}
					errors={errors}
				/>
				<Link to="/auth">{t('forgotPassword')}</Link>
				<LoginBlock>
					<SocBlock>
						<Icon name="google" />
						<Icon name="facebook" />
					</SocBlock>
					<Button disabled={loading} type="submit">
						{t('signInButton')}
					</Button>
				</LoginBlock>
				<SmallErrorMessage>{error}</SmallErrorMessage>
				<Center>
					{t('dontHaveAccount')}
					<Link to={AUTH_SIGN_UP}>{t('registerHere')}</Link>
				</Center>
			</ContainerAuthBlock>
		</WrapContainer>
	)
}

export default withTranslation('common')(SignIn)
