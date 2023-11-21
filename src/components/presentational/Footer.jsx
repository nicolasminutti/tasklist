import React from 'react'
import { Box, AppBar, Toolbar, Grid, Typography } from '@mui/material'
import Link from '@mui/material/Link'
import CopyrightIcon from '@mui/icons-material/Copyright'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

export const Footer = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: 'auto',
				paddingTop: '1rem',
				paddingBottom: '1rem',
			}}
		>
			<AppBar position='sticky' container='true'>
				<Toolbar>
					<Grid container direction='column' alignItems='center'>
						<Grid item xs={12}>
							<Typography variant='h6'>
								Nicolás Minutti
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography color='textSecondary' variant='subtitle1' display='flex' alignItems='center'>
								<CopyrightIcon sx={{ m: 0.5, verticalAlign: 'middle' }} fontSize='medium' />
								{`${new Date().getFullYear()} | `}
								<Link href='https://github.com/nicolasminutti' color='inherit'>
									<GitHubIcon sx={{ m: 0.5, verticalAlign: 'middle' }} fontSize='medium' />
								</Link>
								{` | `}
								<Link href='https://www.linkedin.com/in/nicol%C3%A1s-minutti/' color='inherit'>
									<LinkedInIcon sx={{ m: 0.5, verticalAlign: 'middle' }} fontSize='medium' />
								</Link>
								{` | `}
								<Link href='mailto:test@example.com' color='inherit'>
									<EmailIcon sx={{ m: 0.5, verticalAlign: 'middle' }} fontSize='medium' />
								</Link>
								{` | `}
								<Link href='0000000000' color='inherit'>
									<PhoneAndroidIcon sx={{ m: 0.5, verticalAlign: 'middle' }} fontSize='medium' />
								</Link>
							</Typography>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	)
}