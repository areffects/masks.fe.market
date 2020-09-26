import styled from 'styled-components'
import { v4 } from 'uuid'
import React, { ReactElement, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from 'src/components/Form/Button'
import TextInput from 'src/components/Form/TextInput'
import { SmallErrorMessage } from 'src/components/Form/ErrorMessage'
import GoogleIcon from '../../components/Icon/icons/google.svg'
import FacebookIcon from '../../components/Icon/icons/facebook.svg'
import Link from 'src/components/Link'
import { useMutation } from '@apollo/react-hooks'
import { emailValidator, passwordValidator } from 'src/utils/validators'
import { AUTH_SIGN_IN, PRODUCTS } from 'src/constants/paths'
import { withTranslation } from '../../../i18n.js'
import Lang from 'src/components/Lang'
import { REGISTER_USER } from 'src/lib/gqls/users'
import { useRouter } from 'next/router'

const WrapContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
`

const ContainerFormBlock = styled.form`
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

const SignUp = ({ t }: any): ReactElement => {
	const [error, setError] = useState('')
	const { push } = useRouter()
	const [registerUser, { loading }] = useMutation(REGISTER_USER, {
		onError(error) {
			setError(error.message)
		},
		onCompleted() {
			push(PRODUCTS)
		},
	})
	const defaultUsername = v4().substr(0, 7)
	const { handleSubmit, register, errors } = useForm({
		defaultValues: { userName: defaultUsername },
	})
	const handleLogin = ({
		firstName,
		lastName,
		email,
		password,
	}: {
		firstName: string
		lastName: string
		email: string
		password: string
	}) => {
		registerUser({ variables: { userName: defaultUsername, firstName, lastName, email, password } })
	}
	return (
		<WrapContainer>
			<ContainerFormBlock onSubmit={handleSubmit(handleLogin)}>
				<Lang />
				<AuthHeader>{t('signUp')}</AuthHeader>
				<TextInput
					label="userName"
					name="userName"
					type="text"
					disabled
					required={false}
					register={register}
					errors={errors}
				/>
				<TextInput
					label="firstName"
					name="firstName"
					type="text"
					register={register}
					errors={errors}
				/>
				<TextInput
					label="lastName"
					name="lastName"
					type="text"
					register={register}
					errors={errors}
				/>
				<TextInput
					label="email"
					name="email"
					type="text"
					patternValue={emailValidator}
					patternMessage={'invalidEmail'}
					register={register}
					errors={errors}
				/>
				<TextInput
					label="password"
					name="password"
					type="password"
					patternValue={passwordValidator}
					patternMessage={'invalidPassword'}
					register={register}
					errors={errors}
				/>
				<TextInput
					label="rePassword"
					name="rePassword"
					patternValue={passwordValidator}
					patternMessage={'invalidPassword'}
					type="password"
					register={register}
					errors={errors}
				/>
				{errors.password && errors.rePassword && errors.password !== errors.rePassword && (
					<SmallErrorMessage>{t('passwordError')}</SmallErrorMessage>
				)}
				<LoginBlock>
					<SocBlock>
						<GoogleIcon />
						<FacebookIcon />
					</SocBlock>
					<Button disabled={loading} type="submit">
						{t('signUpButton')}
					</Button>
				</LoginBlock>
				<SmallErrorMessage>{error}</SmallErrorMessage>
				<Center>
					{t('alreadyHaveAccount')}
					<Link to={AUTH_SIGN_IN}>{t('signIn')}</Link>
				</Center>
			</ContainerFormBlock>
		</WrapContainer>
	)
}

export default withTranslation('common')(SignUp)
