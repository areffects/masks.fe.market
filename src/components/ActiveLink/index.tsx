import { useRouter } from 'next/router'
import { IProps } from './types'

const ActiveLink = ({ children, href }: IProps): JSX.Element => {
	const router = useRouter()
	const style = {
		marginRight: 10,
		color: router.pathname === href ? 'red' : 'black',
	}

	const handleClick = (e: any) => {
		e.preventDefault()
		router.push(href)
	}

	return (
		<a href={href} onClick={handleClick} style={style}>
			{children}
		</a>
	)
}

export default ActiveLink
