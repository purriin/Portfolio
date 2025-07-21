import React from 'react'
import Column from '../../ui-kit/Column'
import theme from '../../ui-kit/theme/theme'
import { NavigationBar } from '../navigation/NavigationBar'
import { useBearStore } from '../../hooks/useBearStore'
import Row from '../../ui-kit/Row'
import { NavigationIcons } from '../navigation/NavigationIcons'
import Box from '../../ui-kit/Box'

type LayoutProps = {
	children: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
	const index = useBearStore((state) => state.index)

	return (
		<Column
			backgroundColor={theme.color.dark}
			width="100%"
			height="100%"
			px={[4, 4, 5, 8]}
			py={4}
		>
			<NavigationBar />
			<Row my={5} alignSelf="center" justifySelf="center">
				{index > 0 && (
					<Box display={['none', 'none', 'block', 'block']}>
						<NavigationIcons />
					</Box>
				)}
				{children}
			</Row>
		</Column>
	)
}
