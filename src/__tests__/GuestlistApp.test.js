import React from 'react'
import ReactDOM from 'react-dom'
import GuestlistApp from '../components/GuestlistApp'
import { Provider } from 'react-redux'
import { MemoryRouter, Switch, Route } from 'react-router-dom'
import { resetGuestFilterTerm } from '../actions'
import { GuestListContainer } from '../components/containers'
import FadeIn from 'react-fade-in'
import store from '../store'

describe('GuestlistApp', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={__store__}>
        <GuestlistApp/>
      </Provider>,
      div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should route', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/events/1"]} initialIndex={1}>
          <Route path="/events/:id" render={props => {
            store.dispatch(resetGuestFilterTerm())
            return(
              <FadeIn>
                <GuestListContainer {...props}/>
              </FadeIn>
            )
          }}/>
      </MemoryRouter>
      </Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
