import nameToFile from './files'
import React, { ReactElement } from 'react'

interface Props {
	name: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Icon = ({ name, ...props }: Props): ReactElement => {
	const Icon = nameToFile[name]
	if (Icon) {
		return <Icon {...props} />
	}
	return <div>Icon not found</div>
}

export default Icon
