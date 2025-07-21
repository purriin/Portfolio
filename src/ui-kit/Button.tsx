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
import { ArrowIcon } from './icons/ArrowIcon'

type ButtonVariant = 'primary' | 'secondary' | 'navigation' | 'outlined'

interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
		BorderProps,
		DisplayProps,
		FlexboxProps,
		MaxWidthProps,
		PositionProps,
		SpaceProps,
		WidthProps,
		HeightProps,
		ColorProps {
	children?: React.ReactNode | string
	variant?: ButtonVariant
	className?: string
	arrow?: boolean
}

const ButtonStyle = styled.button<ButtonProps>`
	font-family: ${theme.fonts.source};
	font-weight: 400;
	font-size: 18px;

	${({ variant, children }) => {
		switch (variant) {
			case 'primary':
			default:
				return `
				border-radius: ${theme.borderRadius.lg};
					background-color: ${theme.color.primary};
					transition: opacity 0.3s ease;
					opacity: 0.7;

					&:hover {
						opacity: 1;
						transition: opacity 0.3s ease;
					}
				`
			case 'outlined':
				return `
					border-radius: ${theme.borderRadius.lg};
					border: 2px solid ${theme.color.primary};
					opacity: 0.7;
					transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease;
					color: ${theme.color.primary};
					padding: ${theme.space[1]};
					
					min-width: ${Array.isArray(children) && !!children[0] ? '125px' : '100px'};

					&:hover {
						background-color: ${theme.color.primary};
						opacity: 1;
						transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease;
						color: ${theme.color.dark};
					}
				`
			case 'navigation':
				return `
				padding-left: ${theme.space[2]};
				padding-right: ${theme.space[2]};

				padding-top: ${theme.space[1]};
				padding-bottom: ${theme.space[1]};
				border-radius: ${theme.borderRadius.md};
					background-color: transparent;
					color: ${theme.color.primary};
					transition: opacity 0.3s ease, color 0.3s ease, background-color 0.3s ease;
					opacity: 0.7;

					&:hover {
					background-color: ${theme.color.primary};
					color: ${theme.color.dark};
						opacity: 0.8;
						transition: opacity 0.3s ease, color 0.3s ease, background-color 0.3s ease;
					}
			`
		}
	}}

	${color}
	${display}
    ${flexbox}
    ${maxWidth}
    ${position}
    ${space}
    ${width}
    ${height}
`

const Button: React.FC<ButtonProps> = ({ ...props }) => {
	return (
		<ButtonStyle
			{...props}
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			{props.children}
			{props.arrow && <ArrowIcon ml={props.children ? 2 : 0} width="25%" />}
		</ButtonStyle>
	)
}

export default Button
