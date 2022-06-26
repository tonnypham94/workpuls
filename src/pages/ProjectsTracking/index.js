import * as React from 'react'
import LeftSideMenu from '../../components/common/LeftSideMenu'
import Header from '../../components/common/Header'
import Tasks from '../../components/common/Tasks'
import { Grid } from '@mui/material'

export default function ProjectsTracking() {
  return (
    <Grid container spacing={2} columnSpacing={2}>
      <Grid item xs={12} sm={3} md={3}>
        <LeftSideMenu />
      </Grid>
      <Grid item xs={12} sm={9} md={9} style={{ backgroundColor: '#fcfcfc', height: '100vh', paddingRight: '1rem' }}>
        <Header />
        <Tasks />
      </Grid>
    </Grid>
  )
}
