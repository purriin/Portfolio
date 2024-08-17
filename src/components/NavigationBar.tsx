import React from 'react'
import Container from './base/Container'
import { BrandIcon } from '../assets/icons/BrandIcon'
import theme from './styles/theme'
import Typography from './base/Typography'

export const NavigationBar: React.FC = () => {
	return (
		<Container
			position="sticky"
			display="flex"
			justifyContent="space-between"
			top={theme.spacing[0]}
			marginX={theme.spacing[0]}
			backgroundColor={theme.color.DARK_BLUE}
			borderRadius={theme.borderRadius[2]}
			paddingY={theme.spacing[0]}
			paddingX={theme.spacing[1]}
			zIndex={1}
		>
			<BrandIcon width={64} color={theme.color.GREY} />

			<Container
				display="flex"
				width="30%"
				justifyContent="space-between"
				alignItems="center"
			>
				<Typography variant="sub" color={theme.color.GREY} isUppercase>
					About
				</Typography>
				<Typography variant="sub" color={theme.color.GREY} isUppercase>
					Experience
				</Typography>
				<Typography variant="sub" color={theme.color.GREY} isUppercase>
					Contact
				</Typography>
			</Container>
		</Container>
	)
}
