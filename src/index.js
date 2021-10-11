import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'

import GlobalStyles from './GlobalStyles'
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
