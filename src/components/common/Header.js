import * as React from 'react'
import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import BoltIcon from '@mui/icons-material/Bolt'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined'

export default function Header() {
  const useStyles = makeStyles((theme) => ({
    flexDisplay: {
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: '4px'
    },
    flexDisplayHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      paddingBottom: '30px',
      paddingTop: '10px'
    },
    flexDisplayCalendar: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#f3f5f6',
      borderRadius: '20px',
      padding: '2px 20px 2px 20px'
    },
    flexDisplayNoti: {
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: 'auto'
    },
    flexDisplayBlock: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    activeProject: {
      color: '#42d2b8',
      fontSize: '12px'
    },
    fontWeightBold: {
      fontWeight: 'bold'
    },
    icon: {
      marginLeft: '20px',
      marginRight: '5px'
    },
    bell: {
      border: '1px solid #7a70f0',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '20px',
      marginLeft: 'auto'
    },
    calendar: {
      marginRight: '10px'
    },
    infoBlock: {
      border: '1px solid #f3f5f6',
      borderRadius: '6px',
      padding: '10px',
      marginBottom: '30px',
      background: '#fff'
    },
    hourUnit: {
      fontSize: '0.8rem',
      fontWeight: 'bold',
      marginLeft: '4px'
    },
    dollarUnit: {
      fontSize: '0.8rem',
      fontWeight: 'bold',
      marginRight: '4px'
    },
  }))
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container className={classes.flexDisplayHeader} spacing={{ xs: 2 }}>
          <Grid item xs={12} md={8}>
            <div>Projects &gt; Design System</div>
            <div className={classes.flexDisplay}>
              <Typography variant="h5">Design System</Typography>
              <Typography variant="subtitle2" color='primary' style={{ marginLeft: 20 }}>Edit</Typography>
            </div>
            <div className={classes.flexDisplay}>
              <div className={classes.flexDisplay}>
                <BoltIcon color='info' />
                <Typography className={classes.activeProject}>Active Project</Typography>
              </div>
              <div className={classes.flexDisplay}>
                <AccountBoxIcon className={classes.icon}/>
                <Typography><span className={classes.fontWeightBold}>4</span> asigneers</Typography>
              </div>
              <div className={classes.flexDisplay}>
                <BusinessCenterIcon className={classes.icon}/>
                <Typography>Budget: <span className={classes.fontWeightBold}>32 hours</span></Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.flexDisplay} xs={{ marginTop: '30px' }}>
            <div className={classes.bell}>
              <NotificationsNoneOutlinedIcon color='primary'/>
            </div>
            <div className={classes.flexDisplayCalendar}>
              <CalendarMonthOutlinedIcon className={classes.calendar}/>
              <div>
                <Typography variant="subtitle2">Total time</Typography>
                <Typography variant="paragraph1">Calendar is not available</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        columnSpacing={1}
      >
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.infoBlock}>
            <div className={classes.flexDisplayNoti}>
              <Typography variant="subtitle2">Total time on Project</Typography>
              <BusinessCenterIcon />
            </div>
            <div className={classes.flexDisplayBlock}>
              <Typography variant="h5" style={{ fontWeight: 600 }}>03:39</Typography>
              <span className={classes.hourUnit}>h</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.infoBlock}>
            <div className={classes.flexDisplayNoti}>
              <Typography variant="subtitle2">Earnings</Typography>
              <PaidOutlinedIcon />
            </div>
            <div className={classes.flexDisplayBlock}>
              <span className={classes.dollarUnit}>$</span>
              <Typography variant="h5" style={{ fontWeight: 600 }}>2,409.20</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.infoBlock}>
            <div className={classes.flexDisplayNoti}>
              <Typography variant="subtitle2">Costs</Typography>
              <CreditScoreOutlinedIcon />
            </div>
            <div className={classes.flexDisplayBlock}>
              <span className={classes.dollarUnit}>$</span>
              <Typography variant="h5" style={{ fontWeight: 600 }}>1,260.14</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.infoBlock}>
            <div className={classes.flexDisplayNoti}>
              <Typography variant="subtitle2">Productivity</Typography>
              <AutoGraphOutlinedIcon />
            </div>
            <div className={classes.flexDisplayBlock}>
              <Typography variant="h5" style={{ fontWeight: 600 }}>93.57</Typography>
              <span className={classes.hourUnit}>%</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}
