import React from 'react'
import Lang from 'src/components/Lang'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
	color: white;
	position: absolute;
	bottom: 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10rem;
	width: 100%;
	display: flex;
	padding: 2rem;
	background: ${({ theme }) => theme.color.black};
`

const Footer: React.FC = () => {
	return (
		<FooterWrapper>
			Copyright © 2020
			<Lang />
		</FooterWrapper>
	)
}

export default Footer
