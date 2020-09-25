import styled from 'styled-components'

const TextInput = styled.input`
	border: 1px solid #bdbdbd;
	box-sizing: border-box;
	border-radius: 0.4rem;
	padding: 0.7rem 1.2rem;
	outline: none;
	height: 3.4rem;
	font-size: 1.4rem;
	margin-bottom: 1.6rem;
	&::placeholder {
		color: ${({ theme }) => theme.color.gray};
	}
`

export default TextInput
