export interface IProps {
	name: string
	register: any
	required?: boolean | string
	patternValue?: RegExp
	patternMessage?: string
	placeholder?: string
	type?: string
	errors: Record<string, any>
	label?: string
	disabled?: boolean
}
