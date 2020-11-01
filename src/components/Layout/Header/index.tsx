import React, { useEffect } from 'react'
import styled from 'styled-components'
import Icon from 'src/components/Icon/Icon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ROUTES } from 'src/constants/paths'
import { MenuOutlined } from '@ant-design/icons'
import { Menu, Dropdown } from 'antd'
import StyledLink from 'src/components/StyledLink'
import CustomLink from 'src/components/Link'
import { AUTH_TOKEN } from 'src/constants/storage/ls'
import { useApolloClient } from '@apollo/react-hooks'
import { useGetMe } from 'src/lib/gqls/auth/hooks'

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
const StyledUser = styled.div`
	display: flex;
	align-items: center;
	&:hover {
		opacity: 0.8;
	}
`

const RightBlock = styled.div`
	display: flex;
	align-items: center;
	& > * {
		margin-right: 1.6rem;
	}
	@media (max-width: 768px) {
		display: none;
	}
`
const LeftBlock = styled.div`
	display: flex;
	align-items: center;
`
type NavDataType = { path: string; label: string }

const StyledBurger = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: block;
	}
`
const PrivateAuthRoute: React.FC = ({ children }) => {
	const router = useRouter()
	return router.route.includes(ROUTES.AUTH) ? <></> : children
}

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

	const client = useApolloClient()

	const { refetch, data } = useGetMe()
	useEffect(() => {
		refetch()
	}, [router.pathname])

	const handleLogout = () => {
		localStorage.removeItem(AUTH_TOKEN)
		client.clearStore()
		router.push(ROUTES.MARKETPLACE)
	}
	const MenuWrapper = (
		<Menu>
			<Menu.Item>
				<CustomLink href={ROUTES.PROFILE}>Profile</CustomLink>
			</Menu.Item>
			<Menu.Item onClick={handleLogout}>Logout</Menu.Item>
		</Menu>
	)
	return (
		<PrivateAuthRoute>
			<StyledHeader>
				<Nav>
					<LeftBlock>
						<LogoIcon name="masksLogo" />
						{navData.map(({ label, path }: NavDataType) => (
							<NavLink key={label}>
								<Link href={path}>
									<StyledLink active={path === router.route}>{label}</StyledLink>
								</Link>
							</NavLink>
						))}
					</LeftBlock>
					<RightBlock>
						<Icon name="bookmark" />
						<Icon name="shoppingCart" />
						<StyledUser>
							{data ? (
								<>
									{data.getMe.firstName}
									<Dropdown overlay={MenuWrapper} trigger={['click']}>
										<Icon name="userWithChevron" />
									</Dropdown>
								</>
							) : (
								<CustomLink href={ROUTES.AUTH_SIGN_IN}>
									<Icon name="userWithChevron" />
								</CustomLink>
							)}
						</StyledUser>
					</RightBlock>
					<StyledBurger>
						<MenuOutlined />
					</StyledBurger>
					{/* <Link href="/auth/signin">SignIn</Link> */}
					{/* <Link href="/auth/signup">SignUp</Link> */}
					{/* <Link href="/spacex">SpaceX</Link> */}
				</Nav>
			</StyledHeader>
		</PrivateAuthRoute>
	)
}

export default Header
