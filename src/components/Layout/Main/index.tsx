import { useRouter } from 'next/router'
import { ROUTES } from 'src/constants/paths'
import styled from 'styled-components'

const StyledMain = styled.div<{ isAuth: boolean }>`
	padding-top: ${(props) => (props.isAuth ? '0' : '8rem')};
`

const Main: React.FC = ({ children }) => {
	const { route } = useRouter()
	return <StyledMain isAuth={route.includes(ROUTES.AUTH)}>{children}</StyledMain>
}

export default Main
