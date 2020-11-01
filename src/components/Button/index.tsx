import styled from 'styled-components'
import { Button } from 'antd'

const StyledButton = styled(Button)`
	display: inline-block;
	background: ${({ theme }) => theme.color.black};
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
	border-radius: 5px;
	border: 0;
	padding: 0.8rem 1.4rem;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.color.white};
	font-family: 'HelveticaNeueCyr-Medium';
	height: 3.4rem;
	transition: all 0.2s;
	&:hover {
		opacity: 0.85;
		background: ${({ theme }) => theme.color.black};
		color: ${({ theme }) => theme.color.white};
	}
	&:disabled {
		opacity: 0.7;
	}
	&:focus {
		color: ${({ theme }) => theme.color.white};
		background: ${({ theme }) => theme.color.black};
	}
	&:active {
		position: relative;
		transform: scale(0.97);
	}
	span.anticon {
		color: ${({ theme }) => theme.color.white};
	}
`

export default StyledButton
