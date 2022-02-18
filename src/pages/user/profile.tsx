import H1Text from 'src/components/Settings/H1Text'
import { MediumH2Text } from 'src/components/Settings/H2Text'
import { Col, Form, Input, Row, Select } from 'antd'
import styled from 'styled-components'
import { WithTranslation } from 'next-i18next'
import { withTranslation } from 'i18n'
import { LANG } from 'src/constants/common/lang'
import withPrivateRoute from 'src/hocs/withSidebar'
import ImageUploader from 'src/components/ImageUploader'
import { useGetMe } from 'src/lib/gqls/auth/hooks'
import PartialLoader from 'src/components/Loaders/PartialLoader'

const { Option } = Select

const StyledFormItem = styled(Form.Item)`
	display: flex;
	flex-direction: column;
`
const StyledFormUpload = styled.div`
	.ant-upload ant-upload-drag {
		border-color: black;
	}
	.ant-upload.ant-upload-select-picture-card {
		background: transparent;
		border-color: ${({ theme }) => theme.color.gray};
		width: 100%;
		height: 100%;
		&:hover {
			border-color: ${({ theme }) => theme.color.black};
		}
	}
	.ant-upload.ant-upload-select-picture-card > .ant-upload {
		min-height: 20rem;
		height: 100%;
	}
`

const normFile = (e: any) => {
	if (Array.isArray(e)) {
		return e
	}
	return e && e.fileList
}

const Profile: React.FC<WithTranslation> = ({ t }) => {
	const { data, loading } = useGetMe()
	if (loading) return <PartialLoader />

	const initialValues =
		data && !loading
			? {
					language: LANG.English,
					lastName: data.getMe.lastName,
					firstName: data.getMe.firstName,
					email: data.getMe.email,
			  }
			: {
					language: LANG.English,
			  }

	return (
		<>
			<H1Text>Profile: </H1Text>

			<Form name="profile" initialValues={initialValues}>
				<MediumH2Text>Main:</MediumH2Text>
				<Row gutter={12}>
					<Col span={6}>
						<StyledFormItem
							labelAlign="left"
							name="firstName"
							label="Name"
							rules={[
								{
									required: true,
								},
							]}
						>
							<Input placeholder={'John'} />
						</StyledFormItem>
					</Col>
					<Col span={6}>
						<StyledFormItem
							labelAlign="left"
							name="lastName"
							label="Surname"
							rules={[
								{
									required: true,
								},
							]}
						>
							<Input placeholder={'Smith'} />
						</StyledFormItem>
					</Col>
				</Row>
				<Row gutter={12}>
					<Col span={6}>
						<StyledFormItem labelAlign="left" name="phone" label="phone">
							<Input placeholder={'+38 (022) 444-44-44'} />
						</StyledFormItem>
					</Col>
					<Col span={6}>
						<StyledFormItem
							labelAlign="left"
							name="email"
							label="Email"
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
							<Input placeholder={'example@gmail.com'} />
						</StyledFormItem>
					</Col>
				</Row>
				<Row gutter={12}>
					<Col span={4}>
						<StyledFormUpload>
							<StyledFormItem label="Avatar:" labelAlign="left" rules={[{ required: true }]}>
								<Form.Item
									name="avatar"
									getValueFromEvent={normFile}
									noStyle
									rules={[{ required: true }]}
								>
									<ImageUploader name="avatar" />
								</Form.Item>
							</StyledFormItem>
						</StyledFormUpload>
					</Col>
				</Row>
				<MediumH2Text>Password:</MediumH2Text>
				<Row gutter={12}>
					<Col span={6}>
						<StyledFormItem
							labelAlign="left"
							name="password"
							label="Password"
							rules={[{ required: true, message: t('invalidPassword') }]}
						>
							<Input type="password" placeholder={'*******'} />
						</StyledFormItem>
					</Col>
				</Row>
				<MediumH2Text>Language:</MediumH2Text>
				<Row gutter={12}>
					<Col span={6}>
						<StyledFormItem
							labelAlign="left"
							name="language"
							label="Choose language:"
							rules={[{ required: true }]}
						>
							<Select>
								{Object.keys(LANG).map((key, index) => (
									<Option key={index} value={LANG[key]}>
										{key}
									</Option>
								))}
							</Select>
						</StyledFormItem>
					</Col>
				</Row>
			</Form>
		</>
	)
}

export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}

export default withTranslation('common')(withPrivateRoute(Profile))
