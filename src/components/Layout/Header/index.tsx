import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Col, Row } from 'react-styled-flexboxgrid'

const StyledHeader = styled.header`
	color: green;
`

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<Row>
				<Col xs={6}>
					<nav>
						<Link href="/cat-1">
							<a>Cat 1</a>
						</Link>
						<Link href="/cat-2">
							<a>Cat 2</a>
						</Link>
						<Link href="/auth/signin">
							<a>SignIn</a>
						</Link>
						<Link href="/auth/signup">
							<a>SignUp</a>
						</Link>
						<Link href="/products">
							<a>products</a>
						</Link>
					</nav>
				</Col>
			</Row>
		</StyledHeader>
	)
}

export default Header
