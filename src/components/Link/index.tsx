import styled from 'styled-components'
import { IProps } from './types'
import Link from 'next/link'

const StyledLink = styled.a<{ isActive: boolean | undefined; styles: any }>`
	display: flex;
	color: ${({ theme }) => theme.color.blue};
	&:hover {
		${({ isActive, theme }) =>
			!isActive
				? `
			color: ${theme.color.lightGray};
			`
				: `
				color: black;
				`}
	}
	${({ isActive, theme }) =>
		isActive
			? `
			font-family: '${theme.font?.bold}', sans-serif;
		`
			: ``}}
	${(props) => ({ ...props.styles })}
`

const CustomLink: React.FC<IProps> = ({ href, children, active = false, styles = {} }) => (
	<Link href={href} passHref>
		<StyledLink isActive={active} styles={styles}>
			{children}
		</StyledLink>
	</Link>
)
export default CustomLink
