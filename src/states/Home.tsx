import { Accent } from '../components/basic/Accent'
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from '../constants/links'
import { useBearStore } from '../hooks/useBearStore'
import Button from '../ui-kit/Button'
import Column from '../ui-kit/Column'
import { EmailIcon } from '../ui-kit/icons/EmailIcon'
import { GithubLogo } from '../ui-kit/icons/GithubLogo'
import { LinkedinLogo } from '../ui-kit/icons/LinkedinLogo'
import Row from '../ui-kit/Row'
import theme from '../ui-kit/theme/theme'
import Typography from '../ui-kit/Typography'

export const Home: React.FC = () => {
	const increaseIndex = useBearStore((state) => state.increaseIndex)

	const openLink = (href: string) => {
		window.open(href, '_blank')
	}

	return (
		<Column justifyContent="center" alignItems="center">
			<Column gridGap={2}>
				<Accent />
				<Typography
					variant="sub"
					color={theme.color.primary}
					opacity={0.8}
					className="fade_left"
				>
					Nice to meet you, my name is
				</Typography>
				<Column gridGap={1}>
					<Typography
						variant="h1"
						color={theme.color.white}
						className="fade_left"
					>
						SHANNON VICTORIA JONES
					</Typography>
					<Typography
						variant="h2"
						color={theme.color.primary}
						className="fade_left"
					>
						Software Engineer
					</Typography>
				</Column>
				<Typography
					variant="sub"
					color={theme.color.primary}
					opacity={0.8}
					className="fade_left"
				>
					I'm currently a 4th year Computer Engineering student studying at the
					University of Toronto.
				</Typography>

				<Button
					variant="outlined"
					alignSelf="start"
					mt={2}
					onClick={increaseIndex}
					arrow
					className="fade_left"
					width="200px"
				>
					Read More
				</Button>

				<Accent reversed />

				<Row gridGap={3}>
					<GithubLogo
						color={theme.color.primary}
						className="icon_link"
						onClick={() => openLink(GITHUB_LINK)}
					/>
					<LinkedinLogo
						color={theme.color.primary}
						className="icon_link"
						onClick={() => openLink(LINKEDIN_LINK)}
					/>
					<EmailIcon
						color={theme.color.primary}
						className="icon_link"
						onClick={() => openLink(EMAIL_LINK)}
					/>
				</Row>
			</Column>
		</Column>
	)
}
