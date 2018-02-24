import React from 'react'
import ReactDOM from 'react-dom'
import GuestlistApp from './components/GuestlistApp'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createMuiTheme } from 'material-ui/styles'
import { Provider } from 'react-redux'
import store from './store'

const theme = createMuiTheme({
  /* Theme declarations here */
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <GuestlistApp/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
