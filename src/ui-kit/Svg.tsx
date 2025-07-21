import styled from 'styled-components'
import {
	ColorProps,
	BorderProps,
	DisplayProps,
	FlexboxProps,
	MaxWidthProps,
	MaxHeightProps,
	MinWidthProps,
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
	minWidth,
} from 'styled-system'

export interface SvgProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
		BorderProps,
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
		ZIndexProps,
		MinWidthProps {
	className?: string
}

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
	${minWidth}

	${({ onClick }) => (onClick ? `cursor: pointer;` : '')}
`

export default Svg
