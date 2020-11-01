import styled from 'styled-components'
import React from 'react'
import { Button, Form, Input } from 'antd'
import Link from 'src/components/Link'
import { ROUTES } from 'src/constants/paths'
import { withTranslation } from 'i18n'
import Icon from 'src/components/Icon/Icon'
import { WrapContainer } from 'src/components/AuthWrapper'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { WithTranslation } from 'next-i18next'
import { useLoginUser } from 'src/lib/gqls/auth/hooks'

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
	display: flex;
	justify-content: center;
	span {
		margin-right: 0.4rem;
	}
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

const SignIn: React.FC<WithTranslation> = ({ t }) => {
	const { loading, loginUser } = useLoginUser()
	const handleLogin = (values: any) => {
		loginUser({ variables: { email: values.email, password: values.password } })
	}

	return (
		<WrapContainer>
			<ContainerAuthBlock name="signin" onFinish={handleLogin}>
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
				<Link href={ROUTES.AUTH_RESET_PASSWORD}>{t('resetPassword')}</Link>
				<LoginBlock>
					<SocBlock>
						<Icon name="google" />
						<Icon name="facebook" />
					</SocBlock>
					<Button htmlType="submit" loading={loading}>
						{t('signInButton')}
					</Button>
				</LoginBlock>
				<Center>
					<span>{t('dontHaveAccount')}</span>
					<Link href={ROUTES.AUTH_SIGN_UP}>{t('registerHere')}</Link>
				</Center>
			</ContainerAuthBlock>
		</WrapContainer>
	)
}
export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}
export default withTranslation('common')(SignIn)
