import React from 'react'
import Column from '../../ui-kit/Column'
import { useBearStore } from '../../hooks/useBearStore'
import { States } from '../../states'
import { NavigationIcon } from './NavigationIcon'
import theme from '../../ui-kit/theme/theme'

export const NavigationIcons: React.FC = () => {
	const bear = useBearStore()

	return (
		<Column
			justifyContent="center"
			alignItems="inherit"
			gridGap={3}
			position="absolute"
			top={['25%', '25%', '25%', '25%']}
			left={['10%', '10%', '10%', '20%']}
		>
			<Column
				backgroundColor={theme.color.secondary}
				height={250}
				width={2}
				className="fall_md"
				ml={2}
			/>
			{States.map((state, sectionIndex) => (
				<NavigationIcon
					sectionIndex={sectionIndex}
					currentIndex={bear.index}
					onClick={() => bear.setIndex(sectionIndex)}
					state={state}
					key={sectionIndex}
				/>
			))}
		</Column>
	)
}
