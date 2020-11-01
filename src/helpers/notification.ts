import { globalNotify } from 'src/utils/notifications'

export const globalNotifyErrorHandler = (error: Error): void => {
	globalNotify({ type: 'error', header: error.message })
}
