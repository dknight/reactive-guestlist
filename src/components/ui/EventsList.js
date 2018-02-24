import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = {
  pageTitle: {
    marginBottom: "2rem"
  }
}

const EventsList = (props) => {
  const { classes } = props
  return (
    <div>
      <Typography variant="display2" component="h1" className={classes.pageTitle}>
        Ongoing events
      </Typography>
      <Grid container spacing={16}>
        {props.events.map(evt =>
          <Grid item key={evt.id}>
            <Event event={evt}/>
          </Grid>
        )}
      </Grid>
    </div>
  )
}
EventsList.propTypes = {
  classes: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired
}

export default withStyles(styles)(EventsList)