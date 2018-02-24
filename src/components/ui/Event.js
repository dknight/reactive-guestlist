import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import PersonIcon from 'material-ui-icons/Person'
import { Link } from 'react-router-dom'

import store from '../../store'

const styles = {
  card: {
    width: 345,
    maxWidth: 345,
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  media: {
    height: 200,
  },
  guestIcon: {
    marginLeft: 'auto'
  },
  cardActions: {
    alignSelf: 'flex-end',
    width: '100%',
    marginTop: 'auto'
  },
  address: {
    fontWeight: 'bold',
    fontStyle: 'normal'
  }
}

const Event = (props) => {
  const { classes, event } = props

  // TODO: put guests to reducers
  const guests = store.getState().guests.filter(guest => guest.event_id === event.id)

  return (
    <Card className={classes.card} raised={false}>
      <CardMedia
        className={classes.media}
        image={`/img/${event.image}`}
        title={event.title}
      />
      <CardContent>
        <Typography variant="headline" component="h3">
          {event.title}
        </Typography>
        <Typography component="address" className={classes.address}>
          {event.address}
        </Typography>
        <Typography component="p">
          {event.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button component={Link} to={`/events/${event.id}`} size="medium" color="primary">
          Check-in guests
        </Button>
        <Button component={Link} to={`/events/${event.id}`} size="medium" color="secondary" className={classes.guestIcon}>
          <PersonIcon/>
          {guests.length}
        </Button>
      </CardActions>
    </Card>
  )
}

Event.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
}

export default withStyles(styles)(Event)