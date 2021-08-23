import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './global.css'
import Base from './styles/generic/elements/Base';
import Reset from './styles/generic/Reset';
import {UserInfoProvider} from './contexts/UserInfoContext'
import Store from './contexts/Store'
ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <UserInfoProvider>
   
    <App />
    
    </UserInfoProvider>
    
     
    
  </React.StrictMode>,
  document.getElementById('root')
);
