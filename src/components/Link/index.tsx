import styled from 'styled-components'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { IProps } from './types'

const LinkStyle = styled.a`
	cursor: pointer;
	color: ${({ theme }) => theme.color.linkBlue};
`

const Link = ({ to, children }: IProps): ReactElement => {
	const router = useRouter()
	return <LinkStyle onClick={() => router.push(to)}>{children}</LinkStyle>
}
export default Link
