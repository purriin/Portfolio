import React from 'react'
import Column from '../ui-kit/Column'
import Typography from '../ui-kit/Typography'
import theme from '../ui-kit/theme/theme'
import { useBearStore } from '../hooks/useBearStore'
import Button from '../ui-kit/Button'
import dayjs from 'dayjs'

export const AboutMe: React.FC = () => {
	const increaseIndex = useBearStore((state) => state.increaseIndex)

	const startedCodingYear = '2018'
	const codingExpLength = dayjs().diff(startedCodingYear, 'years')

	return (
		<Column
			justifyContent="center"
			alignItems={['start', 'end', 'end', 'end']}
			gridGap={2}
		>
			<Typography variant="h1" color={theme.color.white} className="fade_left">
				ABOUT ME
			</Typography>
			<Typography
				variant="body"
				color={theme.color.primary}
				width="80%"
				className="fade_left"
			>
				I've been coding for {codingExpLength.toString()} years since{' '}
				{startedCodingYear.toString()} and have been steadily accumulating my
				skills since. I am extremely passionate about technology and solving
				meaningful problems through software.
			</Typography>
			<Typography
				variant="body"
				color={theme.color.primary}
				width="80%"
				className="fade_left"
			>
				My studies at the University of Toronto for Computer Engineering has
				given me a strong and broad technical foundation to work across the
				stack, from low-level systems to high-level application development.
			</Typography>
			<Typography
				variant="body"
				color={theme.color.primary}
				width="80%"
				className="fade_left"
			>
				I thrive in collaborative environments and love getting to learn from
				other professionals in the field. I'm excited to keep growing alongside
				driven, talented individuals in the industry!
			</Typography>
			<Button
				variant="outlined"
				mt={4}
				onClick={increaseIndex}
				className="fade_left"
				arrow
			/>
		</Column>
	)
}
