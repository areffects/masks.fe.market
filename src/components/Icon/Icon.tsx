import nameToFile from './files'
import React from 'react'
import styled from 'styled-components'

interface Props {
	name: string
}

const StyledIcon = styled.span`
	cursor: pointer;
	display: flex;
	color: ${({ theme }) => theme.color.black};
	&:hover {
		opacity: 0.8;
	}
`
const NativeIconFile: React.FC<Props> = ({ name, ...props }) => {
	const IconFile: any = nameToFile[name]
	if (IconFile) {
		return (
			<StyledIcon>
				<IconFile {...props} />
			</StyledIcon>
		)
	}
	return <div>Icon not found</div>
}

// const IconWrapper = React.forwardRef((props, ref) => {
// 	return <Icon ref={ref} {...props} />
// })
export default NativeIconFile
