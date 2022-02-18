import styled from 'styled-components'
import React from 'react'
import { Button, Form, Input } from 'antd'
import Link from 'src/components/Link'
import { ROUTES } from 'src/constants/paths'
import { WrapContainer } from 'src/components/AuthWrapper'
import { MailOutlined } from '@ant-design/icons'
import { WithTranslation } from 'next-i18next'
import { withTranslation } from 'i18n'
import { useResetPasswordUser } from 'src/lib/gqls/auth/hooks'

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
	justify-content: space-evenly;
`

const LoginBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 2rem;
`

const ResetPassword: React.FC<WithTranslation> = ({ t }) => {
	const { loading, resetPassword } = useResetPasswordUser()

	const handleLogin = (values: any) => {
		resetPassword({ variables: { email: values.email, password: values.password } })
	}
	return (
		<WrapContainer>
			<ContainerAuthBlock name="basic" onFinish={handleLogin}>
				<AuthHeader>{t('reset')}</AuthHeader>
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
				<LoginBlock style={{ textAlign: 'right' }}>
					<Button disabled={loading} htmlType="submit" type="primary" danger>
						{t('resetButton')}
					</Button>
				</LoginBlock>
				<Center>
					{t('alreadyHaveAccount')}
					<Link href={ROUTES.AUTH_SIGN_IN}>{t('signIn')}</Link>
				</Center>
			</ContainerAuthBlock>
		</WrapContainer>
	)
}
export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}
export default withTranslation('common')(ResetPassword)
