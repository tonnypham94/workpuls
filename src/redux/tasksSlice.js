import { createSlice } from '@reduxjs/toolkit'
import { apiTaskData } from '../api/api'

const initialState = {
  items: apiTaskData,
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    handleCallTasksApi: (state, action) => {
      state.items = action.payload
    }
  },
})

export const { handleCallTasksApi } = tasksSlice.actions

export default tasksSlice.reducer
