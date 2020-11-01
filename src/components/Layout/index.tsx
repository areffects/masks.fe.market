import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './Header'
// import Spinner from './Spinner'
import Main from './Main'
import Footer from './Footer'
import Head, { IHead } from './Head'

const Wrapper = styled.div`
	background-color: white;
`
const headProps: IHead = {
	pageTitle: 'Home page | Cat',
	pageDescription: 'The cat',
}
const GlobalStyle = createGlobalStyle`
span.anticon{
	cursor: pointer;
	color: ${({ theme }) => theme.color.black};
	&:hover {
		opacity: 0.8;
	}
}
`
const Layout: React.FC = ({ children }) => (
	<Wrapper>
		<GlobalStyle />
		<Head {...headProps} />

		<Header />
		{/* <Spinner /> TODO: active on loading */}

		<Main>{children}</Main>
		<Footer />
	</Wrapper>
)

export default Layout
