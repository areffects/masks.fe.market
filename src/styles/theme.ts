import { DefaultTheme, IThemeMedia } from 'styled-components'

const themeMedia: IThemeMedia = {
	smallUp: 'only screen',
	smallOnly: 'only screen and (max-width: 640px)',

	mediumUp: 'only screen and (min-width: 641px)',
	mediumOnly: 'only screen and (min-width: 641px) and (max-width: 1024px)',

	largeUp: 'only screen and (min-width: 1025px)',
	largeOnly: 'only screen and (min-width: 1025px) and (max-width: 90em)',
}

const theme: DefaultTheme = {
	color: {
		primary: '#0e93f7',
		black: '#3c3c3c',
		gray: '#BDBDBD',
		white: 'white',
		linkBlue: '#4D69FF',
		error: '#ff4c4c',
	},
	font: {
		boldCondensed: 'HelveticaNeueBoldCondensed',
		blackCondensed: 'HelveticaNeueBlackCondensed',
		boldItalic: 'HelveticaNeueCyr-BoldItalic',
		lightItalic: 'HelveticaNeueCyr-LightItalic',
		thinItalic: 'HelveticaNeueCyr-ThinItalic',
		heavy: 'HelveticaNeueCyr-Heavy',
		medium: 'HelveticaNeueCyr-Medium',
		ultraLight: 'HelveticaNeueCyr-UltraLight',
		black: 'HelveticaNeueCyr-Black',
		heavyItalic: 'HelveticaNeueCyr-HeavyItalic',
		mediumItalic: 'HelveticaNeueCyr-MediumItalic',
		ultraLightItalic: 'HelveticaNeueCyr-UltraLightItalic',
		blackItalic: 'HelveticaNeueCyr-BlackItalic',
		italic: 'HelveticaNeueCyr-Italic',
		roman: 'HelveticaNeueCyr-Roman',
		bold: 'HelveticaNeueCyr-Bold',
		light: 'HelveticaNeueCyr-Light',
		thin: 'HelveticaNeueCyr-Thin',
	},
	media: themeMedia,
}

export default theme
