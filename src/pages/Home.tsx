import React from 'react'
import Container from '../components/base/Container'
import { NavigationBar } from '../components/NavigationBar'
import TitleCard from './cards/TitleCard'
import AboutCard from './cards/AboutCard'
import ExperienceCard from './cards/ExperiencesCard'
import ContactCard from './cards/ContactCard'

const Home: React.FC = () => {
	return (
		<Container>
			<NavigationBar />
			<TitleCard />
			<AboutCard />
			<ExperienceCard />
			<ContactCard />
		</Container>
	)
}

export default Home
