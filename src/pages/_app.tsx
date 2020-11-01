import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'
import { useApollo } from 'lib/apollo'
import { appWithTranslation } from 'i18n'
import theme from 'styles/theme'
import { ReactElement } from 'react'
import Layout from 'src/components/Layout'
import 'styles/css/global.css'

const NextApp = ({ Component, pageProps }: AppProps): ReactElement => {
	const apolloClient = useApollo(pageProps.initialApolloState)
	return (
		<ApolloProvider client={apolloClient}>
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</ApolloProvider>
	)
}
export const getInitialProps = (): any => {
	return { namespacesRequired: ['common'] }
}
export default appWithTranslation(NextApp)
