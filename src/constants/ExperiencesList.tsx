export type ExperienceType = {
	title: string
	association: string
	location: string
	date: string
	description: string
	associatedSkills: string[]
	href?: string
}

export const ExperiencesList: ExperienceType[] = [
	{
		title: 'BorderPass',
		association: 'Fullstack Developer Intern',
		location: 'Toronto, Ontario (Hybrid)',
		date: 'May 2024 - June 2025',
		href: 'https://www.borderpass.ai/',
		description: `Collaborated in developing a massively growing fullstack application with high quality, timely deliveries which made it into production.`,
		associatedSkills: [
			'Javascript/Typescript',
			'Fullstack',
			'Git',
			'Apollo GraphQL',
			'Docker',
			'Amazon Web Services (AWS)',
			'CircleCI',
			'PostgreSQL',
			'Database Management',
			'React.js',
			'Next.js',
			'Team Collaboration',
			'Design and Communication',
			'Debugging',
			'OAuth 2.0',
			'REST API',
		],
	},
	{
		title: 'Map Application Project',
		association: 'Team Member',
		location: 'University of Toronto',
		date: 'Winter 2023',
		description: `Worked in a group of 3 to develop a Geographic Information System (GIS) program similar to Google Maps in C++.`,
		associatedSkills: [
			'C++',
			'Low-Level',
			'Git',
			'Team Collaboration',
			'Design and Communication',
			'Data Structures',
			'Optimization',
			'Pathfinding',
		],
	},
	{
		title: 'Computer Organization Picross Project',
		association: 'Team Member',
		location: 'University of Toronto',
		href: 'https://github.com/purriin/picross',
		date: 'Winter 2023',
		description: `Designed with a partner a nonogram game utilizing the DE1-SoC's VGA, private timer and PS/2 in C for an open software project.`,
		associatedSkills: [
			'C',
			'Low-Level',
			'Git',
			'Team Collaboration',
			'Design and Communication',
		],
	},
	{
		title: 'Global Brigades Volunteer Work',
		association: 'Volunteer',
		location: 'Parihuaca, Honduras',
		href: 'https://www.globalbrigades.org/communities/parihuaca/',
		date: 'August 2022',
		description:
			'Traveled abroad with peers to assist a small, rural community in designing a safe and convenient water system.',
		associatedSkills: [
			'Data Collection',
			'Data Analysis',
			'Team Collaboration',
			'Design and Communication',
			'Adaptability',
		],
	},
]
