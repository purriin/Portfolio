import React from 'react'
import { CircleIcon, DiamondIcon, SparkleIcon } from '../../ui-kit/icons'
import theme from '../../ui-kit/theme/theme'
import { State } from '../../states'
import Row from '../../ui-kit/Row'
import Typography from '../../ui-kit/Typography'

type NavigationIconProps = {
	sectionIndex: number
	currentIndex: number
	state: State
	onClick: () => void
}

export const NavigationIcon: React.FC<NavigationIconProps> = ({
	sectionIndex,
	currentIndex,
	state,
	onClick,
}) => {
	const difference = Math.abs(currentIndex - sectionIndex)

	if (difference >= 2) {
		return (
			<Row
				className="fall_left_md nav_icon_link"
				alignItems="center"
				gridGap={2}
				ml={2}
				onClick={onClick}
			>
				<CircleIcon width="2vh" className="contract" />
				<Typography variant="h3">{state.title}</Typography>
			</Row>
		)
	} else if (difference === 1) {
		return (
			<Row
				className="fall_left_sm nav_icon_link"
				alignItems="center"
				gridGap={2}
				onClick={onClick}
			>
				<DiamondIcon width="3vh" className="pop_in" />
				<Typography variant="h3">{state.title}</Typography>
			</Row>
		)
	} else {
		return (
			<Row
				className="current_icon_link"
				alignItems="center"
				gridGap={2}
				onClick={onClick}
			>
				<SparkleIcon
					color={theme.color.white}
					width="4vh"
					className="pop_in move_left"
				/>
				<Typography variant="h3" color={theme.color.white}>
					{state.title}
				</Typography>
			</Row>
		)
	}
}
