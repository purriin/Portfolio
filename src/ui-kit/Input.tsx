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

type InputType = 'text' | 'textarea'

interface InputProps
	extends Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			'color' | 'height' | 'width'
		>,
		BorderProps,
		DisplayProps,
		FlexboxProps,
		MaxWidthProps,
		PositionProps,
		SpaceProps,
		WidthProps,
		HeightProps,
		ColorProps {
	type: InputType
	className?: string
	rows?: string
}

const InputStyle = styled.input<InputProps>`
	${color}
	${display}
    ${flexbox}
    ${maxWidth}
    ${position}
    ${space}
    ${width}
    ${height}

    background-color: ${theme.color.white};
	opacity: 0.7;
	transition: opacity 0.3s ease;
	font-family: ${theme.fonts.source};
	border-radius: ${theme.borderRadius.sm};
	color: ${theme.color.dark};
	padding-left: ${theme.space[1]};
	padding-right: ${theme.space[1]};

	padding-top: ${theme.space[2]};
	padding-bottom: ${theme.space[2]};
	min-width: 400px;

	&:focus {
		outline: none;
		opacity: 1;
		box-shadow: none;
		transition: opacity 0.3s ease;
	}

	&:hover {
		opacity: 1;
		transition: opacity 0.3s ease;
	}
	font-weight: 400;
	font-size: 18px;
`

const TextAreaStyle = styled.textarea<InputProps>`
	${color}
	${display}
    ${flexbox}
    ${maxWidth}
    ${position}
    ${space}
    ${width}
    ${height}

    min-width: 400px;
	background-color: ${theme.color.white};
	opacity: 0.7;
	transition: opacity 0.3s ease;
	font-family: ${theme.fonts.source};
	border-radius: ${theme.borderRadius.sm};
	color: ${theme.color.dark};
	padding-left: ${theme.space[1]};
	padding-right: ${theme.space[1]};

	padding-top: ${theme.space[2]};
	padding-bottom: ${theme.space[2]};

	&:focus {
		outline: none;
		opacity: 1;
		box-shadow: none;
		transition: opacity 0.3s ease;
	}

	&:hover {
		opacity: 1;
		transition: opacity 0.3s ease;
	}
	font-weight: 400;
	font-size: 18px;
`

const Input: React.FC<InputProps> = ({ ...props }) => {
	switch (props.type) {
		default:
		case 'text':
			return <InputStyle {...props} />
		case 'textarea':
			return <TextAreaStyle {...props} />
	}
}

export default Input
