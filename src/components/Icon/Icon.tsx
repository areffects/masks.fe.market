import nameToFile from './files'
import React from 'react'
import styled from 'styled-components'

interface Props {
	name: string
}
const IconWrapper = styled.div`
	svg {
		cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
	}
`

const Icon: React.FC<Props> = ({ name, ...props }) => {
	const IconFile: any = nameToFile[name]
	if (IconFile) {
		return (
			<IconWrapper>
				<IconFile {...props} />
			</IconWrapper>
		)
	}
	return <div>Icon not found</div>
}

export default Icon
