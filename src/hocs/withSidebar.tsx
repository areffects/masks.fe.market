import { Col, Row } from 'antd'
import { WithTranslation } from 'next-i18next'
import PrivateRoute from 'src/components/PrivateRoute'
import Wrapper from 'src/components/Settings/Wrapper'
import Sidebar from 'src/components/Sidebar'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const withPrivateRoute = (C: React.FC<WithTranslation>) => (props: any) => (
	<PrivateRoute>
		<Wrapper>
			<Row gutter={80} justify="center">
				<Col span={6}>
					<Sidebar />
				</Col>
				<Col span={16}>
					<C {...props} />
				</Col>
			</Row>
		</Wrapper>
	</PrivateRoute>
)
export default withPrivateRoute
