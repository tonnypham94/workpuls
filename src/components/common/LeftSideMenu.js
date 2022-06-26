import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor'
import BadgeIcon from '@mui/icons-material/Badge'
import AssessmentIcon from '@mui/icons-material/Assessment'
import PeopleIcon from '@mui/icons-material/People'
import TimerIcon from '@mui/icons-material/Timer'
import PreviewIcon from '@mui/icons-material/Preview'
import SettingsIcon from '@mui/icons-material/Settings'
import Images from '../../assets/images'
import { Grid, Typography } from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { makeStyles } from '@mui/styles'

const MENU = [
  {
    content: 'Dashboard',
    icon: <DashboardIcon />
  },
  {
    content: 'Real-Time Tracking',
    icon: <AccessTimeIcon />
  },
  {
    content: 'Screenshots',
    icon: <ScreenshotMonitorIcon />
  },
  {
    content: 'Employees',
    icon: <BadgeIcon />
  },
  {
    content: 'Projects Tracking',
    icon: <AssessmentIcon />
  },
  {
    content: 'Teams',
    icon: <PeopleIcon />
  },
  {
    content: 'Time and Attendance',
    icon: <TimerIcon />
  },
  {
    content: 'Apps and Websites',
    icon: <PreviewIcon />
  },
  {
    content: 'Settings',
    icon: <SettingsIcon />
  }
]

export default function LeftSideMenu() {
  const useStyles = makeStyles((theme) => ({
    userInfo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    userInfo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 'auto'
    },
    userIcon: {
      width: '30px',
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #586674',
      borderRadius: '50%',
      margin: 'auto',
      marginBottom: '5px'
    }
  }))
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(4)

  const handleListItemClick = (index) => () => {
    setSelectedIndex(index)
  }

  const renderItem = (item, index) => {
    return (
      <ListItemButton
        selected={selectedIndex === index}
        onClick={handleListItemClick(index)}
        key={index}
      >
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.content} />
      </ListItemButton>
    )
  }

  return (
    <Grid container style={{ borderRight: '1px solid #f3f5f6' }} direction="row">
      <Grid item xs={12} style={{
        display: 'flex',
        borderBottom: '1px solid #f3f5f6'
      }}>
        <img
          src={Images.logo}
          style={{
            maxWidth: '200px',
            width: '100%',
            padding: '20px',
            margin: 'auto'
          }}
        />
      </Grid>
      <Grid item xs={12} style={{ height: 'calc(100vh - 150px)' }}>
        <List component="nav" aria-label="leftSideMenu">
          {MENU.map((item, index) => renderItem(item, index))}
        </List>
      </Grid>
      <Grid item xs={12} className={classes.userInfo}>
        <div style={{ textAlign: 'center' }}>
          <div className={classes.userIcon}>
            <PersonOutlineOutlinedIcon />
          </div>
          <Typography variant="subtitle2">Joe Geller</Typography>
        </div>
      </Grid>
    </Grid>
  )
}
