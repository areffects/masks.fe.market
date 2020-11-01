import styled from 'styled-components'

const StyledLink = styled.a<{ active: boolean }>`
	color: black;
	font-size: 1.6rem;
	padding-bottom: 1rem;
	transition: border-bottom 0.6s linear;
	border-bottom: 0px;
	${(props: any) =>
		props.active
			? `
			font-family: '${props.theme.font?.bold}', sans-serif;
			border-bottom: 2px solid black;
		`
			: ``}
	&:hover {
		color: black;
		border-bottom: 2px solid black;
	}
`
export default StyledLink
