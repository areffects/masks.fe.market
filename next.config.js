require('dotenv').config()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
	staticFolder: '/static',
}
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
	rewrites: async () => nextI18NextRewrites(localeSubpaths),
	publicRuntimeConfig: {
		localeSubpaths,
	},
	env: {
		isProd,
		API_URL: process.env.API_URL,
		GRAPHQL_URI: process.env.GRAPHQL_URI,
	},
	// webpackDevMiddleware: config => {
	//   config.watchOptions = {
	//     poll: 800,
	//     aggregateTimeout: 300,
	//   }
	//   return config
	// },
	webpack(config, options) {
		config.module.rules.push({
			test: /\.graphql$/,
			exclude: /node_modules/,
			use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
		})

		config.module.rules.push({
			test: /\.graphqls$/,
			exclude: /node_modules/,
			use: ['graphql-tag/loader', 'graphql-let/schema/loader'],
		})
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		return config
	},
}

module.exports = withBundleAnalyzer(nextConfig)
