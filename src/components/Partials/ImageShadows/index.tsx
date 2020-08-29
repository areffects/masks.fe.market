import React from 'react'
import styled from 'styled-components'

interface IFigure {
	src: string
	width: string
}

const StyledFigure = styled('figure')<IFigure>`
	position: relative;
	padding: 0;
	width: ${(p) => p.width};
	max-width: 90vw;
	margin: 25px auto;
	z-index: 1;

	&:after {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background-image: url(${(p) => p.src});
		background-size: 100% 100%;
		filter: blur(15px) saturate(2);
	}

	& > img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: 3px;
	}
`

interface IImageShadows extends IFigure {
	alt?: string
}

const ImageShadows: React.FC<IImageShadows> = ({ alt = '', ...props }) => (
	<StyledFigure {...props}>
		<img src={props.src} alt={alt} />
	</StyledFigure>
)

export default ImageShadows
