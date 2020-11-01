import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import styled from 'styled-components'

const antIcon = <LoadingOutlined style={{ fontSize: 56 }} spin />

const StyledFullLoader = styled.div`
	display: flex;
	position: absolute;
	width: 100vw;
	top: 0;
	height: 100vh;
	opacity: 0.7;
	justify-content: center;
	background: white;
	align-items: center;
	z-index: 100;
`

const FullLoader: React.FC = () => (
	<StyledFullLoader>
		<Spin size="large" indicator={antIcon} />
	</StyledFullLoader>
)

export default FullLoader
