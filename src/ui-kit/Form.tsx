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
import theme from './theme/theme'

interface FormProps
	extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'color'>,
		BorderProps,
		DisplayProps,
		FlexboxProps,
		MaxWidthProps,
		PositionProps,
		SpaceProps,
		WidthProps,
		HeightProps,
		ColorProps {
	children?: React.ReactNode
	className?: string
}

const FormStyle = styled.form<FormProps>`
	${color}
	${display}
    ${flexbox}
    ${maxWidth}
    ${position}
    ${space}
    ${width}
    ${height}
	padding: ${theme.space[4]};
	background-color: ${theme.color.medium_dark};
	border-radius: ${theme.borderRadius.md};
`

const Form: React.FC<FormProps> = ({ ...props }) => {
	return <FormStyle {...props} />
}

export default Form
