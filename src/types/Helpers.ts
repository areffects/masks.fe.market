export interface KeyObjectMap<T = string> {
	[key: string]: T
}

export type Nullable<T> = T | null

export type Primitive = string | boolean | number
