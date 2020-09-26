import styled from 'styled-components'

export const ErrorMessage = styled.span`
	color: ${({ theme }) => theme.color.error};
	font-size: 1.6rem;
	margin-top: 0.8rem;
	margin-bottom: 0.4rem;
`

export const SmallErrorMessage = styled(ErrorMessage)`
	font-size: 1.2rem;
`
