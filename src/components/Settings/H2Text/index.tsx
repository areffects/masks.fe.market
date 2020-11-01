import styled from 'styled-components'

const H2Text = styled.h1`
	font-size: 2.4rem;
	font-family: '${({ theme }) => theme.font?.bold}', sans-serif;
`

export const MediumH2Text = styled(H2Text)`
	font-family: '${({ theme }) => theme.font?.medium}', sans-serif;
`

export const BoldH2Text = styled(H2Text)`
	font-family: '${({ theme }) => theme.font?.bold}', sans-serif;
`

export default H2Text
