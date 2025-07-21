import React from 'react'
import styled from 'styled-components'
import {
	ColorProps,
	BorderProps,
	DisplayProps,
	FlexboxProps,
	FontWeightProps,
	MaxWidthProps,
	PositionProps,
	SpaceProps,
	TextAlignProps,
	WidthProps,
	color,
	border,
	display,
	flexbox,
	fontWeight,
	maxWidth,
	position,
	space,
	textAlign,
	width,
} from 'styled-system'
import theme from './theme/theme'

interface TypographyProps
	extends BorderProps,
		DisplayProps,
		FlexboxProps,
		FontWeightProps,
		MaxWidthProps,
		PositionProps,
		SpaceProps,
		TextAlignProps,
		WidthProps,
		ColorProps {
	variant?: 'h1' | 'h2' | 'h3' | 'sub' | 'body'

	className?: string

	isItalic?: boolean
	isUnderline?: boolean
	isStrikeThrough?: boolean
	isUppercase?: boolean
	isBold?: boolean
	href?: string
	children: string | string[] | number
}

const getVariantStyle = (variant: TypographyProps['variant']) => {
	switch (variant) {
		case 'h1':
			return `
				font-family: ${theme.fonts.fredoka};
				font-size: 5vh;
                font-weight: bold;
				letter-spacing: 0.15em;
				line-height: 1.0;`
		case 'h2':
			return `
				font-family: ${theme.fonts.source};
                font-size: 4vh;
                font-weight: 400;
				letter-spacing: 0.05em;
				line-height: 1.0;`
		case 'h3':
			return `
				font-family: ${theme.fonts.fredoka};
				font-size: 2.5vh;
				letter-spacing: 0.1em;
				font-weight: 600;
				line-height: 1.0;`
		case 'sub':
			return `
				font-family: ${theme.fonts.source};
                font-size: 2.5vh;
				font-weight: 350;
				letter-spacing: 0.05em;
				line-height: 1.25;`
		case 'body':
			return `
				font-family: ${theme.fonts.source};
				font-weight: 400;
                font-size: 2vh;
				letter-spacing: 0.05em;
				line-height: 1.25;`
		default:
			return `font-family: ${theme.fonts.source};`
	}
}

const TypographyStyle = styled.p<TypographyProps>`
	margin: 0;
	padding: 0;
	${(props) => getVariantStyle(props.variant)}
	${(props) => props.isBold && 'font-weight: bold;'}
    ${(props) => props.isItalic && 'font-style: italic;'}
    ${(props) => props.isUnderline && 'text-decoration: underline;'}
    ${(props) => props.isStrikeThrough && 'text-decoration: line-through;'}
    ${(props) => props.isUppercase && 'text-transform: uppercase;'}
	${(props) =>
		props.href &&
		`cursor: pointer;
		&:hover {
			color: ${theme.color.primary};
		}
	`}

	${color}
	${border}
	${display}
	${flexbox}
	${fontWeight}
	${maxWidth}
	${position}
	${space}
	${textAlign}
	${width}
`

const Typography: React.FC<TypographyProps> = ({ ...props }) => {
	if (props.href) {
		return (
			<a href={props.href}>
				<TypographyStyle {...props}>{props.children}</TypographyStyle>
			</a>
		)
	}

	return <TypographyStyle {...props}>{props.children}</TypographyStyle>
}

export default Typography
