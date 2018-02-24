import React from 'react'
import ReactDOM from 'react-dom'
import { GuestContainer } from '../components/containers'
import { GuestListContainer } from '../components/containers'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

describe('GuestList', () => {

  let div
  beforeEach(() => {
    div = document.createElement('div')
  })

  it('renders GuestList without crashing', () => {
    const tree = <Provider store={__store__}>
        <MemoryRouter>
          <GuestListContainer match={{params: { id: 1} }}/>
        </MemoryRouter>
      </Provider>
    ReactDOM.render(tree, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders GuestListContainer without crashing', () => {
    ReactDOM.render(
      <Provider store={__store__}>
        <MemoryRouter initialEntries={[ '/events/888' ]}>
          <GuestListContainer match={{params: { id: 888} }} event={null}/>
        </MemoryRouter>
      </Provider>,
    div)
  })
})
