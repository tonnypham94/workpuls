import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import ProjectsTracking from './pages/ProjectsTracking'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProjectsTracking />
    </ThemeProvider>
  </Provider>
)
