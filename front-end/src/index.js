import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Login from './components/login'
import Status from './components/Status'
class App extends React.Component {


  render() {
    return (
      <Status/>,

<div>
<Login/>
<Status/>

</div>



    )

  }
}



ReactDom.render(<App />, document.querySelector('#root'))
