import React from 'react'
import styled from 'styled-components'
import {
	ColorProps,
	BorderProps,
	DisplayProps,
	FlexboxProps,
	MaxWidthProps,
	PositionProps,
	SpaceProps,
	WidthProps,
	HeightProps,
	color,
	display,
	flexbox,
	maxWidth,
	position,
	space,
	width,
	height,
} from 'styled-system'

interface DividerProps
	extends BorderProps,
		DisplayProps,
		FlexboxProps,
		MaxWidthProps,
		PositionProps,
		SpaceProps,
		WidthProps,
		HeightProps,
		ColorProps {
	className?: string
}

const DividerStyle = styled.hr<DividerProps>`
	${color}
	${display}
    ${flexbox}
    ${maxWidth}
    ${position}
    ${space}
    ${width}
    ${height}
`

const Divider: React.FC<DividerProps> = ({ ...props }) => {
	return (
		<DividerStyle {...props} alignSelf="center" height={props.height ?? 3} />
	)
}

export default Divider
