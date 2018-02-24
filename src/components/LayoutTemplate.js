import React from 'react'
import TopAppBar from './ui/TopAppBar'

const LayoutTemplate = ({children}) =>
  <div id="main-page">
    <TopAppBar/>
    {children}
  </div>

export default LayoutTemplate