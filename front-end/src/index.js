import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Login from './components/login'
import Status from './components/Status'
import DetalheEstufa  from './components/DetalheEstufa'

class App extends React.Component {


  render() {
    return (
    
<div>
<Login/>
<Status/>
<DetalheEstufa/>




</div>



    )

  }
}



ReactDom.render(<App />, document.querySelector('#root'))
