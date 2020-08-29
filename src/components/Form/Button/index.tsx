import styled from 'styled-components'

const Button = styled.button`
	margin: 20px 0 0;
	box-shadow: 0px 1px 0px 0px #ffffff;
	background-color: transparent;
	border-radius: 3px;
	border: 2px solid #dcdcdc;
	display: inline-block;
	cursor: pointer;
	color: #666666;
	font-size: 15px;
	font-weight: bold;
	padding: 18px 53px;
	text-decoration: none;
	text-transform: uppercase;

	&:hover {
		background-color: transparent;
	}
	&:active {
		position: relative;
		top: 1px;
	}
`

export default Button
