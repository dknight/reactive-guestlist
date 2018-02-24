import React from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

const NotFound = () =>
  <div>
    <Typography variant="display2" gutterBottom>Event not found</Typography>
    <Button color="primary" component={Link} to="/">&laquo; Event list</Button>
  </div>

export default NotFound