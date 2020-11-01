import { WithTranslation } from 'next-i18next'
import { withTranslation } from 'react-i18next'
import ContentWrapper from 'src/components/Settings/ContentWrapper'
import HeaderText from 'src/components/Settings/H1Text'
import Wrapper from 'src/components/Settings/Wrapper'
import Sidebar from 'src/components/Sidebar'

const Billing: React.FC<WithTranslation> = () => {
	return (
		<Wrapper>
			<Sidebar />
			<ContentWrapper>
				<HeaderText>Billing: </HeaderText>
			</ContentWrapper>
		</Wrapper>
	)
}

export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}

export default withTranslation('common')(Billing)
