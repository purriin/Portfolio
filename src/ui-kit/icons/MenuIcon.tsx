import React from 'react'
import Svg, { SvgProps } from '../Svg'

export const MenuIcon: React.FC<SvgProps> = (props) => {
	return (
		<Svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			maxWidth="48px"
		>
			<path
				fill="currentColor"
				d="M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z"
			/>
		</Svg>
	)
}
