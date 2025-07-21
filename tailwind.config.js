/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/*/*.js'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},

			variants: {
				animation: ['motion-safe'],
			},
		},
	},
	plugins: [],
}
