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
		}
		font?: {
			family: string
		}
		media?: IThemeMedia
	}
}
