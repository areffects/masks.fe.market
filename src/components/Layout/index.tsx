import React from 'react'
import styled from 'styled-components'

import Header from './Header'
// import Spinner from './Spinner'
import Main from './Main'
import Footer from './Footer'
import Head, { IHead } from './Head'

const Wrapper = styled.div`
	background-color: #fafbfd;
`
const headProps: IHead = {
	pageTitle: 'Home page | Cat',
	pageDescription: 'The cat',
}

const Layout: React.FC = ({ children }) => (
	<Wrapper>
		<Head {...headProps} />

		<Header />
		{/* <Spinner /> TODO: active on loading */}

		<Main>{children}</Main>
		<Footer />
	</Wrapper>
)

export default Layout
