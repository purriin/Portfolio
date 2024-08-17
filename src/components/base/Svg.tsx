import styled from 'styled-components'
import {
	ColorProps,
	BorderProps,
	DisplayProps,
	FlexboxProps,
	MaxWidthProps,
	MaxHeightProps,
	PositionProps,
	ZIndexProps,
	SpaceProps,
	WidthProps,
	HeightProps,
	BackgroundProps,
	BorderRadiusProps,
	color,
	border,
	display,
	maxWidth,
	position,
	space,
	width,
	height,
	maxHeight,
	background,
	borderRadius,
	flexbox,
	zIndex,
} from 'styled-system'

export interface SvgProps
	extends BorderProps,
		DisplayProps,
		FlexboxProps,
		MaxWidthProps,
		PositionProps,
		SpaceProps,
		WidthProps,
		ColorProps,
		HeightProps,
		BackgroundProps,
		BorderRadiusProps,
		MaxHeightProps,
		ZIndexProps {}

const Svg = styled.svg<SvgProps>`
	${color}
	${border}
    ${display}
    ${flexbox}
    ${maxWidth}
    ${position}
    ${space}
    ${width}
    ${height}
    ${maxHeight}
    ${background}
    ${borderRadius}
    ${zIndex}
`

export default Svg
