import Icon from 'src/components/Icon/Icon'
import styled from 'styled-components'
import Link from 'src/components/Link'
import { useRouter } from 'next/router'

interface ISidebarData {
	label: React.ReactElement
	path: string
	children?: ISidebarData[]
}

const sidebarData: ISidebarData[] = [
	{
		label: (
			<>
				<Icon name="identification" />
				Profile
			</>
		),
		path: '/user/profile',
	},
	{
		label: (
			<>
				<Icon name="bookmark" />
				Favourites
			</>
		),
		path: '/user/favourites',
	},
	{
		label: (
			<>
				<Icon name="truck" />
				Orders
			</>
		),
		path: '/user/orders',
	},
	{
		label: (
			<>
				<Icon name="eye" />
				Viewed
			</>
		),
		path: '/user/viewed',
	},
	{
		label: (
			<>
				<Icon name="annotation" />
				Comments
			</>
		),
		path: '/user/comments',
	},
	{
		label: (
			<>
				<Icon name="gift" />
				Premium
			</>
		),
		path: '/user/premium',
	},
	{
		label: (
			<>
				<Icon name="credit-card" />
				Cards
			</>
		),
		path: '/user/cards',
	},
	{
		label: (
			<>
				<Icon name="beaker" />
				Creators lab
			</>
		),
		path: '/user/lab/billing',
		children: [
			{
				label: (
					<>
						<Icon name="currency-dollar" />
						Billing
					</>
				),
				path: '/user/lab/billing',
			},
			{
				label: (
					<>
						<Icon name="cube" />
						Efects
					</>
				),
				path: '/user/lab/effects',
			},
		],
	},
]

const StyledLabel = styled.div<{ active: boolean }>`
	display: flex;
	align-items: center;
	font-size: 1.8rem;
	cursor: pointer
	&:hover {
		opacity: 0.8;
	}
	svg {
		margin-right: 1rem;
	}
	margin-bottom: 2rem;
${({ active }) =>
	active
		? `
		background: black;
		color: white;
		border-radius: 25px;
		padding: 5px 13px;
		& > a {
			color: white;
		}
		svg * {
			stroke: white;
		}
		a:hover { 
			color: white;
		}
`
		: `border-radius: 25px;
		padding: 5px 13px;`}
		
`

const StyledSidebar = styled.div`
	margin: 1.6rem;
	width: 16rem;
	margin-left: auto;
`

const SidebarRoute = styled.div`
	display: flex;
	&:last-child {
		display: block;
	}
`

const StyledInnerRoute = styled(SidebarRoute)`
	margin-left: 4.8rem;
`

const HorizontalLine = styled.div`
	position: relative;
	width: 100%;
	border: 1px solid ${({ theme }) => theme.color.lightGray};
	opacity: 0.3;
	margin-bottom: 2.8rem;
`

const VerticalLine = styled.div`
	border: 1px solid ${({ theme }) => theme.color.lightGray};
	margin-bottom: 2.8rem;
	position: absolute;
	height: 100%;
	opacity: 0.3;
	margin-bottom: 2.8rem;
	right: 0;
	top: 0;
`

const LabelBlock: React.FC<ISidebarData> = ({ path, label }) => {
	const { route } = useRouter()
	return (
		<StyledLabel active={path === route}>
			<Link
				href={path}
				active={path === route}
				styles={{ color: 'black', display: 'flex', alignItems: 'center', fontSize: '1.6rem' }}
			>
				{label}
			</Link>
		</StyledLabel>
	)
}

const Sidebar: React.FC = () => (
	<StyledSidebar>
		<VerticalLine />

		{sidebarData.map(({ label, path, children }, index) => (
			<SidebarRoute key={index}>
				{children && <HorizontalLine />}
				<LabelBlock label={label} path={path} />
				{children &&
					children.map(({ label, path }, index) => (
						<StyledInnerRoute key={index}>
							<LabelBlock label={label} path={path} />
						</StyledInnerRoute>
					))}
			</SidebarRoute>
		))}
	</StyledSidebar>
)
export default Sidebar
