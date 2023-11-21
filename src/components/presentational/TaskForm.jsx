import React, { useState } from 'react'
import { Container, Box, Grid, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@mui/material'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

export const TaskForm = ({ onAddTask }) => {
	const [taskName, setTaskName] = useState('')
	const [priority, setPriority] = useState('Media')
	const [remainingCharacters, setRemainingCharacters] = useState(70)

	const handleChange = (e) => {
		const inputText = e.target.value
		const remaining = 70 - inputText.length
		setRemainingCharacters(remaining > 0 ? remaining : 0)
		setTaskName(inputText.slice(0, 70))
	}

	const handlePriorityChange = (e) => {
		setPriority(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (taskName.trim() !== '') {
			onAddTask(taskName, priority)
			setTaskName('')
			setPriority('Media')
			setRemainingCharacters(70)
		}
	}

	return (
		<Container maxWidth='md'>
			<Box sx={{ p: '20px' }}>
				<FormControl component='form' onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant='h5' gutterBottom>
								Agregar Tarea
							</Typography>
						</Grid>
						<Grid item xs={12} md={8}>
							<TextField id='taskName' value={taskName} onChange={handleChange} multiline rows={5} variant='filled' fullWidth inputProps={{ maxLength: 70 }} />
							<Typography variant='caption' color='text.secondary' gutterBottom>
								Caracteres restantes: {remainingCharacters}
							</Typography>
						</Grid>
						<Grid item xs={12} md={4} container direction='column' justifyContent='center' alignItems='center'>
							<FormLabel id='radio-buttons'>Prioridad</FormLabel>
							<RadioGroup row aria-labelledby='radio-buttons' defaultValue='medium' name='radio-buttons-group'>
								<FormControlLabel value='Alta' id='priorityHigh' checked={priority === 'Alta'} onChange={handlePriorityChange} control={<Radio />} label='Alta' />
								<FormControlLabel value='Media' id='priorityMedium' checked={priority === 'Media'} onChange={handlePriorityChange} control={<Radio />} label='Media' />
								<FormControlLabel value='Baja' id='priorityLow' checked={priority === 'Baja'} onChange={handlePriorityChange} control={<Radio />} label='Baja' />
							</RadioGroup>
						</Grid>
						<Grid item xs={12} container justifyContent='center' alignItems='center'>
							<Button type='submit' variant='contained' color='success'>
								<PlaylistAddIcon /> Agregar Tarea
							</Button>
						</Grid>
					</Grid>
				</FormControl>
			</Box>
		</Container>
	)
}