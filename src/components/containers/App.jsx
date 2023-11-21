import React, { useState, useEffect } from 'react'
import { Header } from '../presentational/Header'
import { Grid, Paper } from '@mui/material'
import { Footer } from '../presentational/Footer'
import { TaskList } from '../presentational/TaskList'
import { TaskForm } from '../presentational/TaskForm'
import { TaskSummary } from '../presentational/TaskSummary'
import { TaskSearch } from '../presentational/TaskSearch'
import { uuidv4 } from '../../utils/uuidv4'

export const App = () => {
	const [tasks, setTasks] = useState([])
	const [filteredTasks, setFilteredTasks] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
		if (storedTasks.length > 0) {
			setTasks(storedTasks)
			setFilteredTasks(storedTasks)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const handleTaskComplete = (taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		)

		setFilteredTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		)
	}

	const handleTaskDelete = (taskId) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
	}

	const handleTaskEdit = (taskId, editedTask, editedPriority) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, name: editedTask, priority: editedPriority } : task
			)
		)

		setTasks((prevTasks) =>
			prevTasks.sort((a, b) => {
				const priorityOrder = { Alta: 3, Media: 2, Baja: 1 }
				return priorityOrder[b.priority] - priorityOrder[a.priority]
			})
		)
	}

	const handleAddTask = (taskName, priority) => {
		const newTask = {
			id: uuidv4(),
			name: taskName,
			completed: false,
			created_at: new Date().toISOString(),
			priority: priority,
		}

		setTasks((prevTasks) => {
			const updatedTasks = [...prevTasks, newTask]
			return updatedTasks.sort((a, b) => {
				const priorityOrder = { Alta: 3, Media: 2, Baja: 1 }
				return priorityOrder[b.priority] - priorityOrder[a.priority]
			})
		})
	}

	const handleDeleteAllTasks = () => {
		setTasks([])
	}

	const handleDeleteCompletedTasks = () => {
		setTasks((prevTasks) => prevTasks.filter((task) => !task.completed))
	}

	const handleSearch = (term) => {
		setSearchTerm(term)
		const filtered = tasks.filter((task) =>
			task.name.toLowerCase().includes(term.toLowerCase())
		)
		setFilteredTasks(filtered)
	}

	const sortedTasks = tasks.sort((a, b) => a.priority - b.priority)

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12} md={4}>
				<Paper>
					<TaskForm onAddTask={handleAddTask} />
				</Paper>
			</Grid>
			<Grid item p xs={12} md={8}>
				<Grid direction='column' justifyContent='center' container rowSpacing={1}>
					<Grid item p xs={12} md={8}>
						<Paper>
							<TaskSummary
								totalTasks={tasks.length}
								completedTasks={tasks.filter((task) => task.completed).length}
								remainingTasks={tasks.filter((task) => !task.completed).length}
								onDeleteAllTasks={handleDeleteAllTasks}
								onDeleteCompletedTasks={handleDeleteCompletedTasks}
							/>
						</Paper>
					</Grid>
					<Grid item p xs={12} md={8}>
						<TaskSearch onSearch={handleSearch} />
					</Grid>
					<Grid item p xs={12} md={8}>
						<TaskList
							tasks={searchTerm ? filteredTasks : sortedTasks}
							onTaskComplete={handleTaskComplete}
							onTaskDelete={handleTaskDelete}
							onTaskEdit={handleTaskEdit}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item p xs={12}>
				<Footer />
			</Grid>
		</Grid>
	)
}