import { WithTranslation } from 'next-i18next'
import { LANG } from 'src/constants/common/lang'
import styled from 'styled-components'
import { withTranslation } from '../../../i18n'

const LangStyle = styled.div``

const LangButton = styled.button`
	text-transform: uppercase;
	background: transparent;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.color.black};
	border: 0.1rem solid white;
	padding: 0.8rem;
	border-radius: 1rem;
	background: white;
`

const Lang: React.FC<WithTranslation> = ({ i18n }) => (
	<LangStyle>
		<LangButton
			onClick={() => {
				i18n.changeLanguage(i18n.language === LANG.Russian ? LANG.English : LANG.Russian)
			}}
		>
			{i18n.language}
		</LangButton>
	</LangStyle>
)
export default withTranslation('common')(Lang)
