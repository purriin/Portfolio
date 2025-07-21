import React from 'react'
import styled from 'styled-components'
import {
	ColorProps,
	BorderProps,
	DisplayProps,
	FlexboxProps,
	MaxWidthProps,
	MaxHeightProps,
	PositionProps,
	SpaceProps,
	WidthProps,
	HeightProps,
	GridGapProps,
	OverflowProps,
	overflow,
	maxHeight,
	color,
	display,
	flexbox,
	maxWidth,
	position,
	space,
	width,
	height,
	gridGap,
	overflowY,
	border,
} from 'styled-system'

interface ColumnProps
	extends BorderProps,
		DisplayProps,
		FlexboxProps,
		MaxWidthProps,
		PositionProps,
		SpaceProps,
		WidthProps,
		HeightProps,
		GridGapProps,
		MaxHeightProps,
		OverflowProps,
		ColorProps {
	children?: React.ReactNode
	className?: string
}

const ColumnStyle = styled.div<ColumnProps>`
	${color}
	${display}
    ${flexbox}
    ${maxWidth}
    ${position}
    ${space}
    ${width}
    ${height}
	${gridGap}
	${maxHeight}
	${overflow}
	${border}
	${overflowY}
`

const Column: React.FC<ColumnProps> = ({ ...props }) => {
	return (
		<ColumnStyle
			{...props}
			display={props.display ?? 'flex'}
			flexDirection="column"
		/>
	)
}

export default Column
