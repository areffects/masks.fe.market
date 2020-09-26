/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.graphqls' {
	import { DocumentNode } from 'graphql'
	export default typeof DocumentNode
}

declare module '*.svg' {
	import * as React from 'react'

	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>

	const src: string
	export default src
}
