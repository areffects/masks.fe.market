import { ReactElement } from 'react'
import { RU, EN } from 'src/constants/common/lang'
import styled from 'styled-components'
import { i18n } from '../../../i18n'

const LangStyle = styled.div`
	position: fixed;
	top: 10rem;
	right: 10rem;
`
const LangButton = styled.button`
	text-transform: uppercase;
	padding: 1rem;
	background: ${({ theme }) => theme.color.white};
	box-shadow: 0px 0.4rem 1rem rgba(0, 0, 0, 0.25);
	border-radius: 1rem;
	font-size: 1.4rem;
`

const Lang = (): ReactElement => (
	<LangStyle>
		<LangButton
			onClick={() => {
				i18n.changeLanguage(i18n.language === RU ? EN : RU)
			}}
		>
			{i18n.language}
		</LangButton>
	</LangStyle>
)
export default Lang
