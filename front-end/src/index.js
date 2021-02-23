import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './components/login'
import Status from './components/Status'
import DetalheEstufa from './components/DetalheEstufa'
import Page from './pages/Page'



ReactDOM.render(
  <React.StrictMode>
    <Page title='teste' color="red" border="3px solid blue" retangulo="retangulo" />
    <Login />
    <Status />
    <DetalheEstufa /> 


  </React.StrictMode>,
  document.getElementById('root')
);
