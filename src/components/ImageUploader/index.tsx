import styled from 'styled-components'
import { Upload, message, Modal, Row, Col } from 'antd'
import { useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import Icon from 'src/components/Icon/Icon'
import { UploadChangeParam } from 'antd/lib/upload'
import { getBase64 } from 'src/utils/file'
import { uploadScreenshotFile } from 'src/lib/gqls/products/hooks'

const IconWrap = styled.p`
	display: flex;
	justify-content: center;
	height: 3rem;
	svg * {
		stroke: ${({ theme }) => theme.color.gray};
	}
`

interface IImageUploader {
	name: string
	listType?: 'picture' | 'text' | 'picture-card' | undefined
}

const ImageUploader: React.FC<IImageUploader> = ({ name, listType = 'picture-card' }) => {
	const [previewVisible, setPreviewVisible] = useState(false)
	const [fileData, setFileData] = useState<{
		loading?: boolean
		imageUrl?: ArrayBuffer | string | null
	}>({ loading: false })
	// const { uploadFile, loading } = useUploadProductScreenshotFile()
	const validateFile = (file: File) => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
		if (!isJpgOrPng) {
			message.error('You can only upload JPG/PNG file!')
		}
		const isLt2M = file.size / 1024 / 1024 < 2
		if (!isLt2M) {
			message.error('Image must smaller than 2MB!')
		}
		return isJpgOrPng && isLt2M
	}

	const handleChange = async (info: UploadChangeParam) => {
		if (info.file.status === 'uploading') {
			setFileData({ loading: true })
			return
		}
		if (info.file.status === 'done' && info.file.originFileObj) {
			// Get this url from response in real world.
			const imageUrl = await getBase64(info.file.originFileObj)

			await uploadScreenshotFile({ file: info.file.originFileObj } as { file: File })

			return setFileData({
				imageUrl,
				loading: false,
			})
		}
	}
	return (
		<Row>
			<Col span={20}>
				<Upload
					name={name}
					listType={listType}
					showUploadList={false}
					beforeUpload={validateFile}
					onChange={handleChange}
				>
					{fileData.imageUrl ? (
						<img src={String(fileData.imageUrl)} alt="avatar" style={{ width: '100%' }} />
					) : (
						<IconWrap>{fileData.loading ? <LoadingOutlined /> : <Icon name="user" />}</IconWrap>
					)}
				</Upload>
			</Col>
			{fileData.imageUrl && (
				<Col span={4}>
					<a onClick={() => setPreviewVisible(true)}>
						<Icon name="eye" />
					</a>
					<a onClick={() => setFileData({})}>
						<Icon name="trash" />
					</a>
				</Col>
			)}
			<Modal
				visible={previewVisible}
				title={'Preview title'}
				footer={null}
				onCancel={() => setPreviewVisible(false)}
			>
				<img alt="example" style={{ width: '100%' }} src={String(fileData.imageUrl)} />
			</Modal>
		</Row>
	)
}
export default ImageUploader
