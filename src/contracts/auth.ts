export interface IAuthType {
	withRedirect?: boolean
}
export interface IRequest {
	uri: string
	method: string
	body: any
	headers?: any
	privateAuth?: boolean
}
