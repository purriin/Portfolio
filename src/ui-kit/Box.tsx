import React from 'react'
import styled from 'styled-components'
import {
	ColorProps,
	BorderProps,
	DisplayProps,
	GridGapProps,
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
	gridGap,
} from 'styled-system'

interface BoxProps
	extends BorderProps,
		DisplayProps,
		FlexboxProps,
		MaxWidthProps,
		PositionProps,
		SpaceProps,
		WidthProps,
		HeightProps,
		GridGapProps,
		ColorProps {
	children?: React.ReactNode
	className?: string
}

const BoxStyle = styled.div<BoxProps>`
	${color}
	${display}
    ${flexbox}
    ${maxWidth}
    ${position}
    ${space}
    ${width}
    ${height}
	${gridGap}
`

const Box: React.FC<BoxProps> = ({ ...props }) => {
	return <BoxStyle {...props} width="100%" alignSelf="center" />
}

export default Box
