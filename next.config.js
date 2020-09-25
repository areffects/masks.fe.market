require('dotenv').config()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
	env: {
		isProd,
		API_URL: process.env.API_URL,
	},
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
			// use: [
			// 	{
			// 		loader: '@svgr/webpack',
			// 		options: {
			// 			native: true,
			// 		},
			// 	},
			// ],
			use: ['@svgr/webpack', 'url-loader'],
		})

		return config
	},
}

module.exports = withBundleAnalyzer(nextConfig)
