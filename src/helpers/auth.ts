import { AUTH_TOKEN } from 'src/constants/storage/ls'

export const authWrap = (headers: Record<string, any> = {}): any => {
	const token = localStorage.getItem(AUTH_TOKEN)
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
}
