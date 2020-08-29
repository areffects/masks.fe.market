import React from 'react'
import styled from 'styled-components'

import Head, { IHead } from 'components/Layout/Head'
import ImageShadows from 'components/Partials/ImageShadows'

const headProps: IHead = {
	pageTitle: 'Home page | Cat',
	pageDescription: 'The cat',
}

const StyledSection = styled.section`
	padding: 30px;
`

const Home = () => {
	return (
		<StyledSection>
			<Head {...headProps} />
			<h1>Hey 👋</h1>
			<ImageShadows src="/static/images/cat.jpg" width="280px" alt="Happy cat" />
		</StyledSection>
	)
}

export default Home
