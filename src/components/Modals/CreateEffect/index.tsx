import styled from 'styled-components'
import { Form, Modal, Input, InputNumber, Upload, Select } from 'antd'
import { withTranslation } from 'i18n'
import Button from 'src/components/Button'
import Icon from 'src/components/Icon/Icon'
import { WithTranslation } from 'next-i18next'
import { UsersProductsData } from 'src/constants/data/product'
const { Option } = Select

interface IProps {
	visibleCreate: boolean
	handleOk: any
	handleCancel: any
	loading: boolean
}

const StyledFormItem = styled(Form.Item)`
	display: flex;
	flex-direction: column;
`
const StyledFormUpload = styled.div`
	.ant-upload ant-upload-drag {
		border-color: black;
	}
	.ant-upload.ant-upload-drag {
		background: transparent;
		border-color: ${({ theme }) => theme.color.gray};
		&:hover {
			border-color: ${({ theme }) => theme.color.black};
		}
	}
`
const IconWrap = styled.p`
	display: flex;
	justify-content: center;
	height: 3rem;
`

const normFile = (e: any) => {
	if (Array.isArray(e)) {
		return e
	}
	return e && e.fileList
}

const CreateEffectModal: React.FC<IProps & WithTranslation> = ({
	visibleCreate,
	handleOk,
	handleCancel,
	loading,
}) => {
	return (
		<Modal
			visible={visibleCreate}
			title="Add new effect"
			onOk={handleOk}
			onCancel={handleCancel}
			footer={[
				<Button key="back" onClick={handleCancel}>
					Return
				</Button>,
				<Button loading={loading} form="myForm" key="submit" type="primary" htmlType="submit">
					Submit
				</Button>,
			]}
		>
			<Form id="myForm" onFinish={handleOk} initialValues={{ type: UsersProductsData.Public }}>
				<StyledFormItem labelAlign="left" name="name" label="Name" rules={[{ required: true }]}>
					<Input placeholder={'Type here...'} />
				</StyledFormItem>
				<StyledFormItem
					labelAlign="left"
					label="Caregory"
					name="category"
					rules={[{ required: true }]}
				>
					<Input placeholder={'Type here...'} />
				</StyledFormItem>
				<StyledFormItem labelAlign="left" label="Type" name="type" rules={[{ required: true }]}>
					<Select>
						{Object.keys(UsersProductsData).map((key, index) => (
							<Option key={index} value={UsersProductsData[key]}>
								{key}
							</Option>
						))}
					</Select>
				</StyledFormItem>

				<StyledFormItem labelAlign="left" label="Cost" name="cost" rules={[{ required: true }]}>
					<InputNumber placeholder={'Type here...'} />
				</StyledFormItem>
				<StyledFormItem
					labelAlign="left"
					label="Description"
					name="description"
					rules={[{ required: true }]}
				>
					<Input.TextArea placeholder={'Type here...'} />
				</StyledFormItem>

				<StyledFormUpload>
					<StyledFormItem label="Screenshots:" labelAlign="left" rules={[{ required: true }]}>
						<Form.Item
							name="screenshoots"
							valuePropName="screenshoots"
							getValueFromEvent={normFile}
							noStyle
							rules={[{ required: true }]}
						>
							<Upload.Dragger name="files">
								<IconWrap>
									<Icon name="upload" />
								</IconWrap>
								<p className="ant-upload-text">Click or drag file to this area to upload</p>
								<p className="ant-upload-hint">Support for a single or bulk upload.</p>
							</Upload.Dragger>
						</Form.Item>
					</StyledFormItem>
				</StyledFormUpload>
				<StyledFormUpload>
					<StyledFormItem label="Files of effect:" labelAlign="left" rules={[{ required: true }]}>
						<Form.Item
							name="fileOfEffect"
							valuePropName="fileOfEffect"
							getValueFromEvent={normFile}
							noStyle
							rules={[{ required: true }]}
						>
							<Upload.Dragger name="files">
								<IconWrap>
									<Icon name="upload" />
								</IconWrap>
								<p className="ant-upload-text">Click or drag file to this area to upload</p>
								<p className="ant-upload-hint">Support for a single or bulk upload.</p>
							</Upload.Dragger>
						</Form.Item>
					</StyledFormItem>
				</StyledFormUpload>
			</Form>
		</Modal>
	)
}

export default withTranslation('common')(CreateEffectModal)
