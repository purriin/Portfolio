import React from 'react'
import { AboutMe } from './AboutMe'
import { ContactMe } from './ContactMe'
import { Experiences } from './Experiences'
import { Home } from './Home'

export type State = {
	title: string
	component: React.FC
}
export const States: State[] = [
	{ title: 'Home', component: Home },
	{
		title: 'About',
		component: AboutMe,
	},
	{
		title: 'Experiences',
		component: Experiences,
	},
	{
		title: 'Contact',
		component: ContactMe,
	},
]
