import { notification } from 'antd'
import { IconType } from 'antd/lib/notification'

interface Notification {
	type: IconType
	header?: string
	description?: string
}

export const globalNotify = ({
	type,
	header = '',
	description = 'Description',
}: Notification): void => {
	notification[type]({
		message: header,
		description: description,
	})
}
