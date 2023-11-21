import React, { useState, useEffect } from 'react'
import { fechaDiferencia } from '../../utils/fechaDiferencia'
import { Card, CardContent, Typography, Checkbox, TextField, CardActions, FormControlLabel, Box, Grid, IconButton, Tooltip } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import LowPriorityIcon from '@mui/icons-material/LowPriority'

const priorityIcons = {
    Alta: <PriorityHighIcon color='error' />,
    Media: <CalendarViewDayIcon color='primary' />,
    Baja: <LowPriorityIcon color='disabled' />,
}

export const TaskItem = ({ task, onTaskComplete, onTaskDelete, onTaskEdit }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedTask, setEditedTask] = useState(task.name)
    const [editedPriority, setEditedPriority] = useState(task.priority)
    const [remainingCharacters, setRemainingCharacters] = useState(70 - task.name.length)

    useEffect(() => {
        setRemainingCharacters(70 - editedTask.length)
    }, [editedTask])

    const handleEdit = () => {
        setIsEditing(true)
        setEditedTask(task.name)
        setEditedPriority(task.priority)
    }

    const handleSaveEdit = () => {
        setIsEditing(false)
        onTaskEdit(task.id, editedTask, editedPriority)
    }

    const handleCancelEdit = () => {
        setIsEditing(false)
    }

    return (
        <Card>
            {priorityIcons[task.priority] && (
                <Tooltip title={`Prioridad ${task.priority}`} placement='top' arrow>
                    {priorityIcons[task.priority]}
                </Tooltip>
            )}
            <CardContent>
                {!isEditing ? (
                    <>
                        <FormControlLabel
                            control={
                                <Tooltip title='Completar Tarea' placement='top' arrow>
                                    <Checkbox
                                        checked={task.completed}
                                        onChange={() => onTaskComplete(task.id)}
                                        color='primary'
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </Tooltip>
                            }
                            label={
                                <Typography variant='body1' component='div' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                    {task.name}
                                </Typography>
                            }
                        />
                        <Typography variant='body2' color='text.secondary'>
                            Prioridad: {task.priority}
                        </Typography>
                    </>
                ) : (
                    <>
                        <TextField
                            id={`editedTask-${task.id}`}
                            name={`editedTask-${task.id}`}
                            label='Editar tarea'
                            value={editedTask}
                            onChange={(e) => setEditedTask(e.target.value)}
                            fullWidth
                            multiline
                            maxRows={4}
                            maxLength={70}
                        />
                        <Typography variant='body2' color='text.secondary'>
                            Caracteres restantes: {remainingCharacters}
                        </Typography>
                        <Box>
                            <FormControlLabel
                                control={<Checkbox checked={editedPriority === 'Alta'} onChange={() => setEditedPriority('Alta')} />}
                                label='Alta'
                            />
                            <FormControlLabel
                                control={<Checkbox checked={editedPriority === 'Media'} onChange={() => setEditedPriority('Media')} />}
                                label='Media'
                            />
                            <FormControlLabel
                                control={<Checkbox checked={editedPriority === 'Baja'} onChange={() => setEditedPriority('Baja')} />}
                                label='Baja'
                            />
                        </Box>
                    </>
                )}
            </CardContent>
            <Grid container justifyContent='center' alignItems='center'>
                <CardActions>
                    {!isEditing ? (
                        <>
                            <Tooltip title='Editar Tarea' placement='top' arrow>
                                <IconButton aria-label='edit' onClick={handleEdit}>
                                    <EditIcon color='primary' />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='Borrar Tarea' placement='top' arrow>
                                <IconButton aria-label='delete' onClick={() => onTaskDelete(task.id)}>
                                    <DeleteIcon color='error' />
                                </IconButton>
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <Tooltip title='Aceptar Cambio' placement='top' arrow>
                                <IconButton aria-label='accept' onClick={handleSaveEdit}>
                                    <DoneIcon color='action' />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='Cancelar Cambio' placement='top' arrow>
                                <IconButton aria-label='cancel' onClick={handleCancelEdit}>
                                    <ClearIcon color='error' />
                                </IconButton>
                            </Tooltip>
                        </>
                    )}
                </CardActions>
            </Grid>
            <Grid container justifyContent='flex-end' sx={{ pr: 2 }}>
                <Typography variant='caption' display='block' gutterBottom color='text.secondary'>
                    Hace {fechaDiferencia(task.created_at)}
                </Typography>
            </Grid>
        </Card>
    )
}