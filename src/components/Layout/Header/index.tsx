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
						<Link href="/cat-1" passHref>
							<a>Cat 1</a>
						</Link>
						<Link href="/cat-2" passHref>
							<a>Cat 2</a>
						</Link>
					</nav>
				</Col>
			</Row>
		</StyledHeader>
	)
}

export default Header
