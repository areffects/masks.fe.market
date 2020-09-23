import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface InitialProps {
	styles: JSX.Element
	html: string
	head?: (JSX.Element | null)[] | undefined
}

class NextDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<InitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}
}

export default NextDocument
