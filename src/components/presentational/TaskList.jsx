import React from 'react'
import { Box, Grid } from '@mui/material'
import { TaskItem } from './TaskItem'

export const TaskList = ({ tasks, onTaskComplete, onTaskDelete, onTaskEdit }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				{tasks.map((task) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={task.id}>
						<TaskItem
							task={task}
							onTaskComplete={onTaskComplete}
							onTaskDelete={onTaskDelete}
							onTaskEdit={onTaskEdit}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}