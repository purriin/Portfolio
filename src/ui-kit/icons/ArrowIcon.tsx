import React from 'react'
import Svg, { SvgProps } from '../Svg'

export const ArrowIcon: React.FC<SvgProps> = (props) => {
	return (
		<Svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			maxWidth="24px"
		>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 12h14m-4 4l4-4m-4-4l4 4"
			/>
		</Svg>
	)
}
