import { connect } from 'react-redux'
import GuestList from './ui/GuestList'
import Guest from './ui/Guest'
import EventsList from './ui/EventsList'
import { guestCheckIn,
         guestCheckOut,
         guestFilterTerm,
         guestSort } from '../actions'

export const GuestContainer = connect(
  state => state,
  dispatch => ({
    onCheckOut(guest) {
      dispatch(guestCheckOut(guest))
    },
    onCheckIn(guest) {
      dispatch(guestCheckIn(guest))
    }
  })
)(Guest)

export const GuestListContainer = connect(
  (state, ownProps) => ({
    guests: state.guests.filter(guest => guest.event_id === ownProps.match.params.id),
    event: state.events.filter(evt => evt.id === ownProps.match.params.id)[0],
    filter: state.guestFilterTerm,
    sortBy: state.sortBy
  }),
  dispatch => ({
    onFilter(needle) {
      dispatch(guestFilterTerm(needle))
    },
    onSort(sortBy) {
      dispatch(guestSort(sortBy))
    }
  })
)(GuestList)

export const EventsListContainer = connect(
  (state) => ({
    events: state.events
  }),
  dispatch => ({})
)(EventsList)