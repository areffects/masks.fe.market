declare namespace NodeJS {
	export interface ProcessEnv {
		isProd: boolean
		API_URL: string
		GRAPHQL_URI: string
	}
}
