import React from 'react'
import { Grid, Box, Typography, Button, ButtonGroup } from '@mui/material'

export const TaskSummary = ({
    totalTasks,
    completedTasks,
    remainingTasks,
    onDeleteAllTasks,
    onDeleteCompletedTasks,
}) => {
    return (
        <Box sx={{ p: 2, mr: 'auto' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography variant='body2' gutterBottom>
                        Cantidad de tareas: {totalTasks}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant='body2' gutterBottom>
                        Cantidad completadas: {completedTasks}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant='body2' gutterBottom>
                        Cantidad restantes: {remainingTasks}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ButtonGroup fullWidth variant='contained'>
                        <Button color='error' onClick={onDeleteAllTasks} sx={{ fontSize: { xs: 10, md: 11 } }}>
                            Borrar Todas las Tareas
                        </Button>
                        <Button color='warning' onClick={onDeleteCompletedTasks} sx={{ fontSize: { xs: 10, md: 11 } }}>
                            Borrar Tareas Completadas
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Box>
    )
}