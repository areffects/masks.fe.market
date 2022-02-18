import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import styled from 'styled-components'

const antIcon = <LoadingOutlined style={{ fontSize: 56 }} spin />

const StyledPartialLoader = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	top: 0;
	height: 100%;
	opacity: 0.7;
	justify-content: center;
	background: white;
	align-items: center;
	z-index: 100;
`

const PartialLoader: React.FC = () => (
	<StyledPartialLoader>
		<Spin size="large" indicator={antIcon} />
	</StyledPartialLoader>
)

export default PartialLoader
