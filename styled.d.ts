import 'styled-components'

declare module 'styled-components' {
	export interface IThemeMedia {
		smallUp: string
		smallOnly: string

		mediumUp: string
		mediumOnly: string

		largeUp: string
		largeOnly: string
	}

	export interface DefaultTheme {
		color: {
			primary: string
			black: string
			gray: string
			lightGray: string
			white: string
			linkBlue: string
			error: string
			blue: string
		}
		font?: {
			boldCondensed?: string
			blackCondensed?: string
			boldItalic?: string
			lightItalic?: string
			thinItalic?: string
			heavy?: string
			medium?: string
			ultraLight?: string
			black?: string
			heavyItalic?: string
			mediumItalic?: string
			ultraLightItalic?: string
			blackItalic?: string
			italic?: string
			roman?: string
			bold?: string
			light?: string
			thin?: string
		}
		media?: IThemeMedia
	}
}
