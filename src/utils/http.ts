import { IRequest } from 'src/contracts/auth'
import { authWrap } from 'src/helpers/auth'
import { errorHandler } from 'src/lib/apollo/links/errors'

export const request = async ({
	uri,
	method,
	body,
	headers = {},
	privateAuth = true,
}: IRequest): Promise<any> => {
	const data = await fetch(uri, {
		method,
		body,
		...(privateAuth ? authWrap(headers) : {}),
	})
	const dataJson = await data.json()
	if (dataJson.errors.length) {
		errorHandler(dataJson.errors)
	}
	return dataJson
}
