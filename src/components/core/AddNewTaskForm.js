import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Paper } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Stack from '@mui/material/Stack'

const initialValues = {
  title: '',
  assignee: '',
  time: Date.now(),
  priority: '',
}

const AddNewTaskForm = ({ isOpen, handleClose, handleSubmit }) => {
  const [value, setValue] = React.useState(initialValues)

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    })
  }

  const handleChangeTime = (value) => {
    setValue({
      ...value,
      time: value
    })
  }

  return (
    <Dialog open={isOpen} onClose={handleClose} style={{ padding: '2rem' }}>
      <DialogTitle style={{ width: '600px' }}>Add New Task</DialogTitle>
      <Paper style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
      }}>
        <TextField
          id='title'
          name='title'
          required
          label='Title'
          value={value.title}
          onChange={handleChange}
          style={{ marginBottom: '2rem' }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              id='time'
              name='time'
              label='Time'
              inputFormat='MM/dd/yyyy'
              value={value.time}
              onChange={handleChangeTime}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-simple-select-helper-label'>Assignee</InputLabel>
          <Select
            labelId='demo-simple-select-helper-label'
            id='demo-simple-select-helper'
            name='assignee'
            value={value.assignee}
            label='Assignee'
            onChange={handleChange}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value='Bob'>Bob</MenuItem>
            <MenuItem value='Jenny'>Jenny</MenuItem>
            <MenuItem value='Tom'>Tom</MenuItem>
            <MenuItem value='Lisa'>Lisa</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-simple-select-helper-label'>Priority</InputLabel>
          <Select
            labelId='demo-simple-select-helper-label'
            id='demo-simple-select-helper'
            name='priority'
            value={value.priority}
            label='Priority'
            onChange={handleChange}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit(value)}>Submit</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddNewTaskForm
