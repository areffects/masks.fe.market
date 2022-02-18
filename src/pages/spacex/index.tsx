import Link from 'src/components/Link'
import styled from 'styled-components'
import { SpaceXRoot } from 'src/contracts/spacex'
// import { NextPage, NextPageContext } from 'next'
import http from 'http'

const SpaceXLaunch = styled.li`
	margin: 20px 0;
`
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SpaceX: React.FC<{ spacex: SpaceXRoot[] }> = ({ spacex }) => {
	return (
		<div>
			<h1>SpaceX Launches</h1>
			<ol>
				{spacex.map(({ name, id }: any) => (
					<SpaceXLaunch key={id}>
						<h2>{name}</h2>
						<Link href={`/spacex/${id}`}>Link to</Link>
					</SpaceXLaunch>
				))}
			</ol>
		</div>
	)
}

// interface Context extends NextPageContext {
//   // any modifications to the default context, e.g. query types
// }
export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}

export async function getStaticProps(): Promise<{ props: { spacex: SpaceXRoot } }> {
	http.createServer((_, res) => res.end('<p>END</p>')).listen(4015).addListener
	const data = await fetch('https://api.spacexdata.com/v4/launches')
	const spacex = await data.json()
	return { props: { spacex } }
}

export default SpaceX
