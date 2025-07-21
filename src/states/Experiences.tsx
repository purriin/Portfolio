import React from 'react'
import Column from '../ui-kit/Column'
import Typography from '../ui-kit/Typography'
import theme from '../ui-kit/theme/theme'
import Button from '../ui-kit/Button'
import { useBearStore } from '../hooks/useBearStore'
import { ExperiencesList } from '../constants/ExperiencesList'
import { ExperienceRow } from '../components/experiences/ExperienceRow'

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

			<Column
				backgroundColor={theme.color.medium_dark}
				borderRadius={theme.borderRadius.md}
				padding={3}
				height="48vh"
				overflowY="scroll"
				gridGap={3}
				className="fade_left"
			>
				{ExperiencesList.map((exp) => {
					return <ExperienceRow experience={exp} key={exp.title} />
				})}
			</Column>
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
