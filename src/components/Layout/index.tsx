import React from 'react'
import styled from 'styled-components'
import { Grid } from 'react-styled-flexboxgrid'

import Header from './Header'
// import Spinner from './Spinner'
import Main from './Main'
import Footer from './Footer'

const StyledGrid = styled(Grid)`
	background-color: #fafbfd;
`

const Layout: React.FC = ({ children }) => (
	<StyledGrid fluid={true}>
		<Header />
		{/* <Spinner /> TODO: active on loading */}

		<Main>{children}</Main>
		<Footer />
	</StyledGrid>
)

export default Layout
