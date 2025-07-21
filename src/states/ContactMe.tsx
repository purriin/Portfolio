import React from 'react'
import Column from '../ui-kit/Column'
import Typography from '../ui-kit/Typography'
import theme from '../ui-kit/theme/theme'
import Form from '../ui-kit/Form'
import Input from '../ui-kit/Input'
import Button from '../ui-kit/Button'
import { EMAIL_LINK } from '../constants/links'

export const ContactMe: React.FC = () => {
	return (
		<Column
			justifyContent="end"
			alignItems={['center', 'center', 'end', 'end']}
			gridGap={2}
		>
			<Typography variant="h1" color={theme.color.white} className="fade_left">
				CONTACT ME
			</Typography>

			<Typography
				variant="sub"
				color={theme.color.primary}
				className="fade_left"
				width="80%"
			>
				Have any questions, project ideas or want to say hi? Feel free to send
				me a message.
			</Typography>

			<Column mt={3}>
				<Form
					action={EMAIL_LINK}
					method="get"
					encType="text/plain"
					className="fade_left"
				>
					<Column alignContent="center" justifyItems="center" gridGap={3}>
						<Typography variant="sub" color={theme.color.primary}>
							Subject
						</Typography>
						<Input
							type="text"
							name="subject"
							id="subject"
							placeholder="Enter your subject"
						></Input>

						<Typography variant="sub" color={theme.color.primary} mt={2}>
							Message
						</Typography>
						<Input
							type="textarea"
							rows="4"
							name="body"
							id="body"
							placeholder="Type your message"
						></Input>

						<Button
							arrow
							variant="primary"
							width={200}
							mx="auto"
							my={3}
							padding={2}
						>
							Submit
						</Button>
					</Column>
				</Form>
			</Column>
		</Column>
	)
}
