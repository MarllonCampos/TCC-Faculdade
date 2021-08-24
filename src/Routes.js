import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Page from './pages/Page'

import CadastroEstufas from './pages/CadastroEstufa'
import CadastroElemento from './pages/CadastroElemento'
import EstufaAtiva from './pages/EstufaAtiva'
import LoginEstufa from './pages/LoginEstufa'
import Cadastro from './pages/LoginEstufa/Cadastro'
import Recuperar from './pages/LoginEstufa/Recuperar'
import Uploader from './pages/LoginEstufa/Uploader'
import ListaEstufa from './pages/ListaEstufa'
import Modal from './components/Modal'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Page} />
        <Route path="/lista-estufas" component={ListaEstufa} />
        <Route path="/modal" component={Modal} />

        <Route path="/estufa-ativa/:id" component={EstufaAtiva} />
        <Route path="/cadastro-estufas" component={CadastroEstufas} />
        <Route path="/cadastro-elemento" component={CadastroElemento} />
        <Route path="/login-estufas" component={LoginEstufa} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/recuperar" component={Recuperar} />
        <Route path="/uploader-login" component={Uploader} />
      </Switch>
    </Router>
  )
}

export default Routes
