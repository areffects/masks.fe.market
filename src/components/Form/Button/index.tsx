import styled from 'styled-components'

const Button = styled.button`
	display: inline-block;
	background: ${({ theme }) => theme.color.black};
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
	border-radius: 5px;
	padding: 1rem 2.5rem;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.color.white};
	font-family: 'HelveticaNeueCyr-Medium';
	height: 3.4rem;
	// &:hover {
	// 	background: ${({ theme }) => theme.color.gray};
	// }
	&:disabled {
		opacity: 0.7;
	}
	&:active {
		position: relative;
		top: 1px;
	}
`

export default Button
