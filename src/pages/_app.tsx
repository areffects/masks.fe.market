import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'
import { useApollo } from 'lib/apollo'

import theme from 'styles/theme'

import Layout from 'components/Layout'

import 'styles/css/global.css'
import { ReactElement } from 'react'

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

export default NextApp
