import React from 'react'
import ReactDOM from 'react-dom'
import Guest from '../components/ui/Guest'
import { GuestContainer } from '../components/containers'
import { Provider } from 'react-redux'
import { isCheckedIn } from '../lib/guests-helper'

describe('Guest', () => {

  it('renders Guest without crashing without checked-in guest', () => {
    const div = document.createElement('div')
    const onCheckIn = jest.fn()
    const onCheckOut = jest.fn()
    let testGuest = __initialState__.guests[0]
    testGuest.checkedin_at = null
    ReactDOM.render(
      <Provider store={__store__}>
        <GuestContainer guest={testGuest}/>
      </Provider>,
      div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders Guest without crashing with checked-in guest', () => {
    const div = document.createElement('div')
    const onCheckIn = jest.fn()
    const onCheckOut = jest.fn()
    let testGuest = __initialState__.guests[0]
    testGuest.checkedin_at = new Date()
    ReactDOM.render(
      <Provider store={__store__}>
        <GuestContainer guest={testGuest}/>
      </Provider>,
      div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
