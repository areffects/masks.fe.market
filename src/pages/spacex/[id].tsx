import { withTranslation } from 'i18n'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
// import { NextPage, NextPageContext } from 'next'
import { SpaceXRoot } from 'src/contracts/spacex'
import { WithTranslation } from 'next-i18next'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SpaceXLaunch: React.FC<WithTranslation & { spacex: SpaceXRoot }> = ({ spacex }) => {
	const router = useRouter()
	if (router.isFallback) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<img src={spacex.links.patch.small} alt="" />
			<h1>Name: {spacex?.name}</h1>
			<h3>Details: {spacex?.details}</h3>
			<h3>
				Wiki: <a href={spacex?.links?.wikipedia}>Link</a>
			</h3>
			{/* {t('effect')} */}
			{/* <img src={`${staticFolder}/images/cat.jpg`} alt="" /> */}
		</div>
	)
}

// interface Context extends NextPageContext {
//   // any modifications to the default context, e.g. query types
// }

export const getStaticPaths: GetStaticPaths = async (): Promise<any> => {
	const data = await fetch(`https://api.spacexdata.com/v4/launches`)
	const spacex = await data.json()

	const paths = spacex.map(({ id }: { id: string }) => ({
		params: { id },
	}))
	return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }: any): Promise<any> => {
	const data = await fetch(`https://api.spacexdata.com/v4/launches/${params.id}`)
	const spacex = await data.json()
	return { props: { spacex }, revalidate: 1 }
}

export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}
// export async function getStaticPaths() {
// 	return null
// }

// export const getServerSideProps = async () => {
// 	// Fetch data from external API
// 	const res = await fetch(`https://api.github.com/users/lossless1`)
// 	const data = await res.json()
// 	// Pass data to the page via props
// 	return { props: { data } }
// }
export default withTranslation('common')(SpaceXLaunch)
