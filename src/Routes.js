import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Page from './pages/Page'

import CadastroEstufas from './pages/CadastroEstufa'
import CadastroElemento from './pages/CadastroElemento'
import EstufaAtiva from './pages/EstufaAtiva'
import ListaEstufa from './pages/ListaEstufa'
import ListaPlanta from './pages/ListaPlanta'
import Modal from './components/Modal'
import Cadastro from './pages/CadastroUsuario'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Page} />
        <Route path="/lista-estufas" component={ListaEstufa} />
        <Route path="/lista-plantas" component={ListaPlanta} />
        <Route path="/modal" component={Modal} />

        <Route path="/estufa-ativa/:id" component={EstufaAtiva} />
        <Route path="/cadastro-usuario" component={Cadastro} />
        <Route path="/cadastro-estufas" component={CadastroEstufas} />
        <Route path="/cadastro-elemento" component={CadastroElemento} />
      </Switch>
    </Router>
  )
}

export default Routes
