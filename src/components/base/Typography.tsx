import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

interface TypographyProps {
	variant?: 'h1' | 'h2' | 'h3' | 'sub' | 'body1' | 'body2'
	color?: string

	isItalic?: boolean
	isUnderline?: boolean
	isStrikeThrough?: boolean
	isUppercase?: boolean
	isBold?: boolean
	children: string
}

const getVariantStyle = (variant: TypographyProps['variant']) => {
	switch (variant) {
		case 'h1':
			return `
				font-family: ${theme.fonts.fredoka};
				font-size: 96px;
                font-weight: bold;`
		case 'h2':
			return `
				font-family: ${theme.fonts.fredoka};
                font-size: 60px;
                font-weight: bold;`
		case 'h3':
			return `
				font-family: ${theme.fonts.fredoka};
				font-size: 48px;
				font-weight: bold;`
		case 'sub':
			return `
				font-family: ${theme.fonts.source};
                font-size: 34px;`
		case 'body1':
			return `
				font-family: ${theme.fonts.source};
                font-size: 16px;`
		case 'body2':
			return `
				font-family: ${theme.fonts.source};
                font-size: 14px;`
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
    ${(props) => props.color && `color: ${props.color};`}
`

const Typography: React.FC<TypographyProps> = ({ ...props }) => {
	return <TypographyStyle {...props}>{props.children}</TypographyStyle>
}

export default Typography
