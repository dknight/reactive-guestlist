import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom'

const styles = {
  homeLink: {
    textDecoration: 'none',
    color: 'white'
  }
}

const TopAppBar = (props) => {
  const { classes } = props
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          <Link to="/" className={classes.homeLink}>Reactive Guestlist</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopAppBar);