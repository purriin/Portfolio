import {
	COMPUTER_BREAKPOINT,
	MOBILE_BREAKPOINT,
	TABLET_BREAKPOINT,
} from './breakpoints'
import { COLORS } from './colors'

const theme = {
	breakpoints: [MOBILE_BREAKPOINT, TABLET_BREAKPOINT, COMPUTER_BREAKPOINT],
	color: COLORS,
	fonts: {
		fredoka: '"Fredoka", sans-serif',
		source: '"Source Sans 3", sans-serif',
	},
	space: [
		'0vh',
		'0.5vh',
		'1vh',
		'2vh',
		'4vh',
		'8vh',
		'16vh',
		'32vh',
		'20%',
		'64vh',
		'128vh',
	],
	borderRadius: {
		none: '0px',
		sm: '5px',
		md: '10px',
		lg: '25px',
		round: '100%',
	},
	border: {
		primary: `2px solid ${COLORS.primary}`,
	},
}

export default theme
