import React from 'react'
import Container from '../../components/base/Container'
import theme from '../../components/styles/theme'
import { AboutBackground } from '../../assets/backgrounds/AboutBackground'

const AboutCard: React.FC = () => {
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
				<AboutBackground zIndex={0} width="80%" color={theme.color.DARK_BLUE} />
			</Container>
		</Container>
	)
}

export default AboutCard
