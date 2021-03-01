import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './global.css'
import Base from './styles/generic/elements/Base';
import Reset from './styles/generic/Reset';

ReactDOM.render(
  <React.StrictMode>
    <Reset/>
    <Base/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
