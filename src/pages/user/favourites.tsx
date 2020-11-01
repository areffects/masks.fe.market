import { flow } from 'lodash'
import { WithTranslation } from 'next-i18next'
import { withTranslation } from 'react-i18next'
import HeaderText from 'src/components/Settings/H1Text'
import withPrivateRoute from 'src/hocs/withSidebar'

const Favourites: React.FC<WithTranslation> = () => {
	return (
		<>
			<HeaderText>Favourites: </HeaderText>
		</>
	)
}

export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}

export default flow([withTranslation('common'), withPrivateRoute])(Favourites)
