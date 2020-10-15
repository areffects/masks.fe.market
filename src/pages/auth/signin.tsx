import styled from 'styled-components'
import React, { ReactElement } from 'react'
import { Button, Form, Input } from 'antd'
import Link from 'src/components/Link'
import { useMutation } from '@apollo/react-hooks'
import { AUTH_RESET_PASSWORD, AUTH_SIGN_UP } from 'src/constants/paths'
import { withTranslation } from 'i18n'
import { LOGIN_USER } from 'src/lib/gqls/users'
import Icon from 'src/components/Icon/Icon'
import { WrapContainer } from 'src/components/AuthWrapper'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { globalNotify } from 'src/utils/notifications'

const ContainerAuthBlock = styled(Form)`
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
	margin-top: 1rem;
	svg {
		margin-right: 1rem;
	}
`

const LoginBlock = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;
	align-items: flex-end;
`

const SignIn = ({ t }: any): ReactElement => {
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
			globalNotify({ type: 'error', header: error.message })
		},
	})
	const handleLogin = (values: any) => {
		loginUser({ variables: { email: values.email, password: values.password } })
	}
	return (
		<WrapContainer>
			<ContainerAuthBlock name="basic" onFinish={handleLogin}>
				<AuthHeader>{t('signIn')}</AuthHeader>
				<Form.Item
					name="email"
					rules={[
						{
							type: 'email',
							message: 'The input is not valid E-mail!',
						},
						{
							required: true,
							message: 'Please input your E-mail!',
						},
					]}
				>
					<Input placeholder={t('email')} prefix={<MailOutlined />} />
				</Form.Item>
				<Form.Item name="password" rules={[{ required: true, message: t('invalidPassword') }]}>
					<Input.Password prefix={<LockOutlined />} placeholder={t('password')} />
				</Form.Item>
				<Link href={AUTH_RESET_PASSWORD}>{t('forgotPassword')}</Link>
				<LoginBlock>
					<SocBlock>
						<Icon name="google" />
						<Icon name="facebook" />
					</SocBlock>
					<Button disabled={loading} htmlType="submit">
						{t('signInButton')}
					</Button>
				</LoginBlock>
				<Center>
					{t('dontHaveAccount')}
					<Link href={AUTH_SIGN_UP}>{t('registerHere')}</Link>
				</Center>
			</ContainerAuthBlock>
		</WrapContainer>
	)
}
export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}
export default withTranslation('common')(SignIn)
