import styled from 'styled-components'

const Spinner = styled.div`
	margin: 60px auto;
	font-size: 10px;
	position: relative;
	text-indent: -9999em;
	border-top: 1.1em solid rgba(255, 255, 255, 0.2);
	border-right: 1.1em solid rgba(255, 255, 255, 0.2);
	border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
	border-left: 1.1em solid #ffffff;
	transform: translateZ(0);
	animation: load 1.1s infinite linear;
	&&,
	&:after {
		border-radius: 50%;
		width: 10em;
		height: 10em;
	}
	@keyframes load {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`

export default Spinner
