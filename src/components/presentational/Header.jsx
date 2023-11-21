import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'

export const Header = () => {
	return (
		<AppBar position='sticky' container='true'>
			<Toolbar>
				<FormatListBulletedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					Lista de Tareas
				</Typography>
			</Toolbar>
		</AppBar>
	)
}