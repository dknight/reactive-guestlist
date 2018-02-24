import React from 'react'
import PropTypes from 'prop-types'
import { GuestListContainer, EventsListContainer } from './containers'
import NotFoundTemplate from './NotFoundTemplate'
import LayoutTemplate from './LayoutTemplate'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Reboot from 'material-ui/Reboot'
import { HashRouter, Switch, Route } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import store from '../store'
import { resetGuestFilterTerm } from '../actions'

import 'typeface-roboto'

const styles = {
  main: {
    margin: "2rem",
    padding: "1rem 2rem 4rem"
  }
}

const GuestlistApp = (props) => {
  const { classes } = props
  return (
    <HashRouter>
      <LayoutTemplate>
        <Reboot/>
        <Paper className={classes.main}>
        <Switch>
          <Route exact path="/" component={EventsListContainer}/>
          <Route path="/events/:id" render={props => {
            store.dispatch(resetGuestFilterTerm())
            return(
              <FadeIn>
                <GuestListContainer {...props}/>
              </FadeIn>
            )
          }}/>
          <Route component={NotFoundTemplate}/>
        </Switch>
        </Paper>
      </LayoutTemplate>
    </HashRouter>
  )
}

GuestlistApp.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GuestlistApp)