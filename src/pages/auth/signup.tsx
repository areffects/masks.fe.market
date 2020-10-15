import styled from 'styled-components'
import { v4 } from 'uuid'
import { Button, Form, Input } from 'antd'
import React, { ReactElement } from 'react'
import GoogleIcon from '../../components/Icon/icons/google.svg'
import FacebookIcon from '../../components/Icon/icons/facebook.svg'
import Link from 'src/components/Link'
import { useMutation } from '@apollo/react-hooks'
import { AUTH_SIGN_IN } from 'src/constants/paths'
import { withTranslation } from 'i18n'
import { REGISTER_USER } from 'src/lib/gqls/users'
import { useRouter } from 'next/router'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { WrapContainer } from 'src/components/AuthWrapper'
import { globalNotify } from 'src/utils/notifications'

const ContainerFormBlock = styled(Form)`
	padding: 24px 32px;
	position: absolute;
	width: 400px;
	display: flex;
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
	justify-content: space-between;
`

const SignUp = ({ t }: any): ReactElement => {
	const { push } = useRouter()
	const [registerUser, { loading }] = useMutation(REGISTER_USER, {
		onError(error) {
			globalNotify({ type: 'error', header: error.message })
		},
		onCompleted() {
			push(PRODUCTS)
		},
	})
	const defaultUsername = v4().substr(0, 7)
	const handleLogin = ({ firstName, lastName, email, password }: any) => {
		registerUser({ variables: { userName: defaultUsername, firstName, lastName, email, password } })
	}
	return (
		<WrapContainer>
			<ContainerFormBlock onFinish={handleLogin}>
				<AuthHeader>{t('signUp')}</AuthHeader>
				<Form.Item name="firstName" rules={[{ required: true }]}>
					<Input prefix={<UserOutlined />} placeholder={t('firstName')} />
				</Form.Item>
				<Form.Item name="lastName" rules={[{ required: true }]}>
					<Input prefix={<UserOutlined />} placeholder={t('lastName')} />
				</Form.Item>
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
				<Form.Item
					name="rePassword"
					rules={[
						{ required: true },
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve()
								}
								return Promise.reject('The two passwords that you entered do not match!')
							},
						}),
					]}
				>
					<Input.Password prefix={<LockOutlined />} placeholder={t('rePassword')} />
				</Form.Item>
				<LoginBlock>
					<SocBlock>
						<GoogleIcon />
						<FacebookIcon />
					</SocBlock>
					<Button disabled={loading} htmlType="submit">
						{t('signUpButton')}
					</Button>
				</LoginBlock>
				<Center>
					{t('alreadyHaveAccount')}
					<Link href={AUTH_SIGN_IN}>{t('signIn')}</Link>
				</Center>
			</ContainerFormBlock>
		</WrapContainer>
	)
}
export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}
export default withTranslation('common')(SignUp)
