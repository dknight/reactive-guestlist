import { createStore, applyMiddleware } from 'redux'
import Config from './Config'
import AppReducers from './reducers'
import data from './data/events.json'

export const logger = store => next => action => {
  console.groupCollapsed(`dispatching ${action.type}`)
  console.log('prev state', store.getState())
  console.log('action', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export const saver = store => next => action => {
  const result = next(action)
  localStorage[Config.STORAGE_KEY] = JSON.stringify(store.getState())
  return result
}

const defaultState = {
  events: data.events,
  guests: data.guests,
  guestFilterTerm: '',
  sortBy: Config.SORT_BY_FIRSTNAME
}
const currentState = (localStorage[Config.STORAGE_KEY]) ?
                      JSON.parse(localStorage[Config.STORAGE_KEY]) :
                      defaultState

const middleware = applyMiddleware(logger, saver)
const store = createStore(AppReducers, currentState, middleware)

export default store