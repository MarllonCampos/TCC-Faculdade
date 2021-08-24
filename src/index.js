import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'

import './global.css'
import Base from './styles/generic/elements/Base'
import GlobalStyles from './GlobalStyles'
import { UserInfoProvider } from './contexts/UserInfoContext'
import Store from './contexts/Store'
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Base />
    <UserInfoProvider>
      <Routes />
    </UserInfoProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
