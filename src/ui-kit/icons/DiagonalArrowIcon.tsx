import React from 'react'
import Svg, { SvgProps } from '../Svg'

export const DiagonalArrowIcon: React.FC<SvgProps> = (props) => {
	return (
		<Svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			maxWidth="32px"
		>
			<path
				fill="currentColor"
				d="M6.189 17.289L5.5 16.6L15.58 6.5H6.289v-1h11v11h-1V7.208z"
			/>
		</Svg>
	)
}
