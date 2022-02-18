const NextI18Next = require('next-i18next').default

const config = require('next/config').default()
const path = require('path')

module.exports = new NextI18Next({
	otherLanguages: ['en', 'ru'],
	defaultLanguage: 'en',
	localeSubpaths: config?.publicRuntimeConfig?.localeSubpaths,
	localePath: path.resolve('./public/static/locales'),
})
