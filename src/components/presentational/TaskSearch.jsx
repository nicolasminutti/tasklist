import React, { useState } from 'react'
import { TextField, Box } from '@mui/material'

export const TaskSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (e) => {
        const term = e.target.value
        setSearchTerm(term)
        onSearch(term)
    }

    return (
        <Box sx={{ my: 2 }}>
            <TextField
                fullWidth
                label='Buscar tarea'
                variant='outlined'
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </Box>
    )
}