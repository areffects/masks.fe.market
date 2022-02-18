import { WithTranslation } from 'next-i18next'
import { withTranslation } from 'react-i18next'
import HeaderText from 'src/components/Settings/H1Text'
import withPrivateRoute from 'src/hocs/withSidebar'

const Viewed: React.FC<WithTranslation> = () => {
	return (
		<>
			<HeaderText>Viewed: </HeaderText>
		</>
	)
}

export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}

export default withTranslation('common')(withPrivateRoute(Viewed))