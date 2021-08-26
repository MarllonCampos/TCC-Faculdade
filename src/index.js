import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'

import GlobalStyles from './GlobalStyles'
import { UserInfoProvider } from './contexts/UserInfoContext'
import Store from './contexts/Store'
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <UserInfoProvider>
      <Routes />
    </UserInfoProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
