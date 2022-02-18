import React from 'react'
import styled from 'styled-components'
import Icon from 'src/components/Icon/Icon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AUTH } from 'src/constants/paths'

const StyledHeader = styled.header`
	color: green;
	position: absolute;
	width: 100%;
`
const Nav = styled.nav`
	height: 8rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.4rem;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const LogoIcon = styled(Icon)`
	display: flex;
	margin-right: 6rem;
`
const NavLink = styled.div`
	margin-right: 4.8rem;
`
const StyledLink = styled.a`
	color: black;
	font-size: 1.6rem;
	padding-bottom: 1rem;
	transition: border-bottom 0.6s linear;
	border-bottom: 0px;
	${(props: any) => {
		if (props['data-active']) {
			return `
			font-family: '${props.theme.font?.bold}', sans-serif;
			border-bottom: 2px solid black;
		`
		}
		return ``
	}}
	&:hover {
		color: black;
		border-bottom: 2px solid black;
	}
`

const RightBlock = styled.div`
	display: flex;
	align-items: center;
`
const LeftBlock = styled.div`
	display: flex;
	align-items: center;
`
type NavDataType = { path: string; label: string }

const Header: React.FC = () => {
	const navData: NavDataType[] = [
		{
			path: '/',
			label: 'Marketplace',
		},
		{
			path: '/topsales',
			label: 'Top sales',
		},
		{
			path: '/leaderboard',
			label: 'Leaderboard',
		},
	]
	const router = useRouter()
	if (router.route.includes(AUTH)) {
		return null
	}
	return (
		<StyledHeader>
			<Nav>
				<LeftBlock>
					<LogoIcon name="masksLogo" />
					{navData.map(({ label, path }: NavDataType) => (
						<NavLink key={label}>
							<Link href={path}>
								<StyledLink data-active={path === router.route}>{label}</StyledLink>
							</Link>
						</NavLink>
					))}
				</LeftBlock>
				<RightBlock>
					<Icon name="bookmark" />
					<Icon name="shoppingCart" />
					<Icon name="user" />
				</RightBlock>

				{/* <Link href="/auth/signin">SignIn</Link> */}
				{/* <Link href="/auth/signup">SignUp</Link> */}
				{/* <Link href="/spacex">SpaceX</Link> */}
			</Nav>
		</StyledHeader>
	)
}

export default Header
