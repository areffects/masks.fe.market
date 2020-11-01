export enum UsersProductsTypes {
	Commercial = 'COMMERCIAL',
	Public = 'PUBLIC',
}

export interface IProduct {
	name: string
	description: string
	rating: number
	type: UsersProductsTypes
	downloads: number
}
