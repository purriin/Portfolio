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
	GridGapProps,
	color,
	display,
	flexbox,
	maxWidth,
	position,
	space,
	width,
	height,
	gridGap,
	border,
} from 'styled-system'

interface RowProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
		BorderProps,
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

const RowStyle = styled.div<RowProps>`
	${color}
	${display}
    ${flexbox}
    ${maxWidth}
    ${position}
    ${space}
    ${width}
    ${height}
	${gridGap}
	${border}
`

const Row: React.FC<RowProps> = ({ ...props }) => {
	return <RowStyle {...props} display="flex" />
}

export default Row
