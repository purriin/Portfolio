import React from 'react'
import Row from '../../ui-kit/Row'
import { CircleIcon, DiamondIcon, SparkleIcon } from '../../ui-kit/icons'
import Divider from '../../ui-kit/Divider'
import theme from '../../ui-kit/theme/theme'

type AccentProps = {
	reversed?: boolean
}

export const Accent: React.FC<AccentProps> = ({ reversed }) => {
	const elements = [
		<SparkleIcon color={theme.color.white} className="fall_xs" />,
		<DiamondIcon color={theme.color.secondary} className="fall_sm" />,
		<CircleIcon color={theme.color.secondary} className="fall_md" />,
		<Divider
			color={theme.color.secondary}
			backgroundColor={theme.color.secondary}
			width="25%"
			className={reversed ? 'fade_left' : 'fade_right'}
		/>,
	]

	return (
		<Row gridGap={3} mb={reversed ? 0 : 3} mt={reversed ? 3 : 0}>
			{' '}
			{elements.sort(() => (reversed ? -1 : 1))}
		</Row>
	)
}
