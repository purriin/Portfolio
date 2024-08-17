import React from 'react'
import Container from '../components/base/Container'
import { NavigationBar } from '../components/NavigationBar'
import TitleCard from './cards/TitleCard'

const Home: React.FC = () => {
	return (
		<Container>
			<NavigationBar />
			<TitleCard />
		</Container>
	)
}

export default Home
