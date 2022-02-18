import { WithTranslation } from 'next-i18next'
import { withTranslation } from 'react-i18next'

const Cart: React.FC<WithTranslation> = () => {
	return <div>Cart</div>
}

export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}

export default withTranslation('common')(Cart)
