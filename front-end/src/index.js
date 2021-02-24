import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import Page from './pages/Page'
import Teste from './pages/JP'
import Header from './components/Header'

import Login from './components/login'
import Status from './components/Status'
import DetalheEstufa from './components/DetalheEstufa'


import './global.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
