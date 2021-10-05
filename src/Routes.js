import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import EstufaAtiva from './pages/EstufaAtiva'
import ListaEstufa from './pages/ListaEstufa'
import ListaPlanta from './pages/ListaPlanta'
import Cadastro from './pages/CadastroUsuario'
import { ListaElemento } from './pages/ListaElemento'
import { LoginUsuario } from './pages/LoginUsuario'
import PainelUsuario from './pages/PainelUsuario'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginUsuario} />
        <Route path="/lista-estufas" component={ListaEstufa} />
        <Route path="/lista-plantas" component={ListaPlanta} />

        <Route path="/estufa-ativa" component={EstufaAtiva} />
        <Route path="/cadastro-usuario" component={Cadastro} />
        <Route path="/lista-elemento" component={ListaElemento} />
        <Route path="/painel-usuario" component={PainelUsuario} />
      </Switch>
    </Router>
  )
}

export default Routes
