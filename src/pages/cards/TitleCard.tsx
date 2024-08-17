import React from 'react'
import Container from '../../components/base/Container'
import Typography from '../../components/base/Typography'
import theme from '../../components/styles/theme'
import { IntroductionBackground } from '../../assets/backgrounds/IntroductionBackground'

const TitleCard: React.FC = () => {
	return (
		<Container margin={theme.spacing[2]}>
			<Container
				display="flex"
				justifySelf="center"
				alignSelf="center"
				width="100%"
				alignItems="center"
				justifyContent="center"
			>
				<IntroductionBackground
					zIndex={0}
					width="80%"
					color={theme.color.DARK_BLUE}
				/>
			</Container>
			<Typography variant="h1" color={theme.color.WHITE}>
				Shannon Victoria Jones
			</Typography>
		</Container>
	)
}

export default TitleCard
