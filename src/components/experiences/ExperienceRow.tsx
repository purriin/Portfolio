import React from 'react'
import { ExperienceType } from '../../constants/ExperiencesList'
import Row from '../../ui-kit/Row'
import Column from '../../ui-kit/Column'
import Typography from '../../ui-kit/Typography'
import { DiagonalArrowIcon } from '../../ui-kit/icons/DiagonalArrowIcon'
import theme from '../../ui-kit/theme/theme'

type ExperienceRowProps = {
	experience: ExperienceType
}

export const ExperienceRow: React.FC<ExperienceRowProps> = ({ experience }) => {
	const openLink = (href: string | undefined | null) => {
		if (!!href) {
			window.open(href, '_blank')
		}
	}

	return (
		<Row
			onClick={() => openLink(experience.href)}
			alignItems="start"
			backgroundColor={theme.color.dark}
			px={3}
			py={2}
			borderRadius={theme.borderRadius.md}
			className={!!experience.href ? 'experience_row' : ''}
			gridGap={3}
		>
			<Column>
				<Row justifyContent="space-between" alignItems="center" gridGap={1}>
					<Typography variant="h3" color={theme.color.white} width="55%">
						{experience.title}
					</Typography>
					<Row gridGap={2} width="45%" justifyContent="end" alignItems="center">
						<Typography
							variant="body"
							color={theme.color.primary}
							opacity={0.9}
						>
							{experience.date}
						</Typography>
						{experience.href && <DiagonalArrowIcon color={theme.color.white} />}
					</Row>
				</Row>

				<Typography color={theme.color.white} opacity={0.8}>
					{experience.association}
				</Typography>
				<Typography color={theme.color.primary} opacity={0.8}>
					{experience.location}
				</Typography>

				<Typography color={theme.color.primary} opacity={0.7} mt={2}>
					{experience.description}
				</Typography>
			</Column>
		</Row>
	)
}
