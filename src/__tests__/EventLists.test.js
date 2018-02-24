import React from 'react'
import ReactDOM from 'react-dom'
import EventsList from '../components/ui/EventsList'
import { EventsListContainer } from '../components/containers'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

describe('GuestList', () => {

  let div
  beforeEach(() => {
    div = document.createElement('div')
  })

  it('renders GuestList without crashing', () => {
    ReactDOM.render(
      <Provider store={__store__}>
        <MemoryRouter>
          <EventsList events={__initialState__.events}/>
        </MemoryRouter>
      </Provider>,
      div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders EventsListContainer without crashing', () => {
    ReactDOM.render(
      <Provider store={__store__}>
        <MemoryRouter initialEntries={[ '/' ]}>
          <EventsListContainer/>
        </MemoryRouter>
      </Provider>,
    div)
  })
})