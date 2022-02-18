import styled from 'styled-components'
import { IProps } from './types'
import Link from 'next/link'

export const StyledLink = styled.a`
	cursor: pointer;
`

const CustomLink: React.FC<IProps> = ({ href, children }) => {
	return (
		<Link href={href} passHref>
			<StyledLink>{children}</StyledLink>
		</Link>
	)
}
export default CustomLink
