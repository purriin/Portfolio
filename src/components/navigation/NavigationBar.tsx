import React, { useState } from 'react'
import Row from '../../ui-kit/Row'
import theme from '../../ui-kit/theme/theme'
import { BrandIcon } from '../../ui-kit/icons'
import { useBearStore } from '../../hooks/useBearStore'
import Divider from '../../ui-kit/Divider'
import Column from '../../ui-kit/Column'
import { States } from '../../states'
import Button from '../../ui-kit/Button'
import Box from '../../ui-kit/Box'
import { MenuIcon } from '../../ui-kit/icons/MenuIcon'

export const NavigationBar: React.FC = () => {
	const bear = useBearStore()
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	return (
		<Column width="100%" px={1} py={3} gridGap={2}>
			<Row alignItems="center" justifyContent="space-between" width="100%">
				<BrandIcon
					color={theme.color.primary}
					onClick={bear.resetIndex}
					className="icon_link"
					width="25%"
				/>
				<Box
					display={['none', 'flex', 'flex', 'flex']}
					alignItems="center"
					justifyContent="end"
					gridGap={4}
					ml={6}
					width="75%"
				>
					{States.map((state, sectionIndex) => {
						return (
							<Button
								variant="navigation"
								onClick={() => bear.setIndex(sectionIndex)}
								arrow={sectionIndex + 1 === States.length}
							>
								{state.title}
							</Button>
						)
					})}
				</Box>

				<MenuIcon
					display={['flex', 'none', 'none', 'none']}
					color={theme.color.primary}
					className="icon_menu"
					borderRadius={theme.borderRadius.md}
					backgroundColor={isMenuOpen ? theme.color.medium_dark : 'transparent'}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				/>
				{!!isMenuOpen && (
					<Column
						display={['flex', 'none', 'none', 'none']}
						position="absolute"
						borderRadius={theme.borderRadius.md}
						backgroundColor={theme.color.medium_dark}
						zIndex={1}
						padding={3}
						right="7.5%"
						top="12%"
						gridGap={2}
					>
						{States.map((state, sectionIndex) => {
							return (
								<Button
									variant="navigation"
									onClick={() => bear.setIndex(sectionIndex)}
								>
									{state.title}
								</Button>
							)
						})}
					</Column>
				)}
			</Row>
			<Divider
				backgroundColor={theme.color.primary}
				opacity={0.7}
				width="100%"
			/>
		</Column>
	)
}
