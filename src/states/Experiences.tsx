import React from 'react'
import Column from '../ui-kit/Column'
import Typography from '../ui-kit/Typography'
import theme from '../ui-kit/theme/theme'
import Button from '../ui-kit/Button'
import { useBearStore } from '../hooks/useBearStore'

export const Experiences: React.FC = () => {
	const increaseIndex = useBearStore((state) => state.increaseIndex)

	return (
		<Column
			justifyContent="center"
			alignItems={['start', 'end', 'end', 'end']}
			gridGap={2}
		>
			<Typography variant="h1" color={theme.color.white} className="fade_left">
				EXPERIENCES
			</Typography>
			<Typography
				variant="sub"
				color={theme.color.primary}
				width="80%"
				className="fade_left"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</Typography>
			<Button
				variant="outlined"
				opacity={0.7}
				mt={4}
				onClick={increaseIndex}
				className="fade_left"
				arrow
			/>
		</Column>
	)
}
