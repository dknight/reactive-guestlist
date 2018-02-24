import ActionsTypes from './ActionsTypes'
import { combineReducers } from 'redux'
import Config from './Config'

export const guest = (state={}, action) => {
  switch (action.type) {
    case ActionsTypes.GUEST_CHECKIN:
      return (state.email !== action.email) ?
        state :
        {
          ...state,
          checkedin_at: new Date()
        }
    case ActionsTypes.GUEST_CHECKOUT:
      return (state.email !== action.email) ?
        state :
        {
          ...state,
          checkedin_at: null
        }
    default:
      return state
  }
}

export const guests = (state=[], action) => {
  switch (action.type) {
    case ActionsTypes.GUEST_CHECKIN:
    case ActionsTypes.GUEST_CHECKOUT:
      return state.map(g => guest(g, action))
    case ActionsTypes.GUEST_FILTER:
      return [...state]
    case ActionsTypes.GUEST_SORT:
      if (action.sortBy === Config.SORT_BY_FIRSTNAME) {
        return [...state].sort((a,b) => a.name.first > b.name.first)
      }
      if (action.sortBy === Config.SORT_BY_LASTNAME) {
        return [...state].sort((a,b) => a.name.last > b.name.last)
      }
      return [...state]
    default:
      return state
  }
}

export const events = (state=[], action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const guestFilterTerm = (state='', action) => {
  switch (action.type) {
    case ActionsTypes.GUEST_FILTER:
      return action.needle
    case ActionsTypes.GUEST_FILTER_RESET:
      return ''
    default:
      return state
  }
}

export const guestSortReducer = (state='', action) => {
  switch (action.type) {
    case ActionsTypes.GUEST_SORT:
      return action.sortBy
    default:
      return state
  }
}

const AppReducers = combineReducers({
  events: events,
  guests: guests,
  guestFilterTerm: guestFilterTerm,
  sortBy: guestSortReducer
})

export default AppReducers