import styled from 'styled-components'

const H1Text = styled.h1`
	font-size: 4rem;
	font-family: '${({ theme }) => theme.font?.bold}', sans-serif;
`

export default H1Text
