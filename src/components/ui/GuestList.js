import React from 'react'
import PropTypes from 'prop-types'
import { GuestContainer } from  '../containers'
import { filterGuests, isCheckedIn } from '../../lib/guests-helper'
import NotFoundTemplate from '../NotFoundTemplate'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import { FormGroup, FormControl } from 'material-ui/Form'
import PersonIcon from 'material-ui-icons/Person'
import { MenuItem } from 'material-ui/Menu'
import Select from 'material-ui/Select'
import Input, { InputLabel } from 'material-ui/Input'
import Config from '../../Config'

const styles = {
  visitorsCount: {
    textAlign: 'right',
    marginLeft: 'auto',
    alignSelf: 'flex-end'
  },
  visitorsIcon: {
    marginBottom: -6
  },
  toolbox: {
    display: 'flex',
    margin: '1rem 0'
  }
}

const GuestList = (props) => {
  const {
    classes,
    event,
    guests,
    onSort,
    sortBy,
    onFilter
  } = props
  const filteredGuests = filterGuests(props.filter, guests)
  return (event ?
    <div className="guest-list">
      <Typography variant="display2" component="h1" gutterBottom>
        {event.title}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        {event.description}
      </Typography>

      <div className={classes.toolbox}>
      <FormControl className={classes.formControl}>
          <InputLabel htmlFor="sortBy">Sort by</InputLabel>
          <Select
            value={sortBy}
            onChange={e => onSort(e.target.value)}
            name="sortBy"
            input={<Input id="name-error" />}
            >
            <MenuItem value={Config.SORT_BY_FIRSTNAME}>First name</MenuItem>
            <MenuItem value={Config.SORT_BY_LASTNAME}>Last name</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="body1" component="p" gutterBottom className={classes.visitorsCount}>
          <PersonIcon className={classes.visitorsIcon}/>
          {guests.filter(guest => isCheckedIn(guest)).length} of {guests.length}
          &nbsp;guests have arrived
        </Typography>
      </div>
      <FormGroup>
        <input
          onChange={(e) => onFilter(e.target.value)}
          type="search"
          name="search"
          placeholder="Search guest..."
          value={props.filter}
          autoFocus
        />
      </FormGroup>
      {guests.length === 0 ?
      <Typography component="p" color="secondary" variant="headline">
        Not users found
      </Typography> :
      <List>
        {filteredGuests.map((guest, i) => 
          <GuestContainer guest={guest} key={i}/>
        )}
      </List>
      }
    </div> :
    <NotFoundTemplate/>
  )
}

GuestList.propTypes = {
  classes:    PropTypes.object.isRequired,
  onFilter:   PropTypes.func,
  filter:     PropTypes.string
}

export default withStyles(styles)(GuestList)