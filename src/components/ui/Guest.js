import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Checkbox from 'material-ui/Checkbox'
import Avatar from 'material-ui/Avatar'
import { FormLabel } from 'material-ui/Form'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import dateFormat from 'dateformat'
import lightBlue from 'material-ui/colors/lightBlue'
import Config from '../../Config'
import { fullname, isCheckedIn } from '../../lib/guests-helper'

const styles = {
  visited: {
    backgroundColor: lightBlue[50]
  }
}

const Guest = (props) => {
  const { guest, classes, onCheckIn, onCheckOut } = props
  return (
    <ListItem onClick={isCheckedIn(guest) ? () => onCheckOut(guest) : () => onCheckIn(guest)}
              className={'list-item-1 ' + (isCheckedIn(guest) ? classes.visited : '')} dense button>
      <Avatar alt={fullname(guest)} src={guest.picture.thumbnail}/>
      <ListItemText primary={fullname(guest)}/>
      <ListItemSecondaryAction>
        {(isCheckedIn(guest)) ?
          <FormLabel>{`Arrived at ${dateFormat(guest.checkedin_at, Config.DATE_FORMAT)}`}</FormLabel> :
          ''
        }
        <Checkbox checked={isCheckedIn(guest)} onClick={isCheckedIn(guest) ? () => onCheckOut(guest) : () => onCheckIn(guest)}/>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

Guest.propTypes = {
  guest: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onCheckIn: PropTypes.func.isRequired,
  onCheckOut: PropTypes.func.isRequired
}

export default withStyles(styles)(Guest)