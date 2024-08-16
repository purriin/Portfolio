import React from 'react'
import Typography from '../components/base/Typography'
import theme from '../components/styles/theme'

const Home: React.FC = () => {
	return (
		<div className="bg-sparkle">
			<Typography variant="h1" color={theme.color.PRIMARY}>
				Shannon Victoria Jones
			</Typography>
		</div>
	)
}

export default Home
