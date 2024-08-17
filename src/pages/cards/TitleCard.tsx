import React from 'react'
import Container from '../../components/base/Container'
import Typography from '../../components/base/Typography'
import theme from '../../components/styles/theme'
import { IntroductionBackground } from '../../assets/backgrounds/IntroductionBackground'

const TitleCard: React.FC = () => {
	return (
		<Container margin={theme.spacing[0]} display="grid">
			<Container
				zIndex={-1}
				gridColumn="1"
				gridRow="1"
				width="75%"
				display="flex"
				justifySelf="center"
			>
				<IntroductionBackground color={theme.color.DARK_BLUE} />
			</Container>
			<Container gridColumn="1" gridRow="1" margin={theme.spacing[4]}>
				<Typography
					variant="h1"
					color={theme.color.WHITE}
					width="75%"
					isUppercase
				>
					Shannon Victoria Jones
				</Typography>

				<Typography
					variant="sub"
					color={theme.color.GREY}
					mt={theme.spacing[1]}
				>
					Software Engineer
				</Typography>
			</Container>
		</Container>
	)
}

export default TitleCard
