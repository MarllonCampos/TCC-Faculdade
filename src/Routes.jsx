import React,{useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import EstufaAtiva from './pages/EstufaAtiva'
import ListaEstufa from './pages/ListaEstufa'
import ListaPlanta from './pages/ListaPlanta'
import Cadastro from './pages/CadastroUsuario'
import CadastroPlanta from './pages/CadastroPlanta'
import { ListaElemento } from './pages/ListaElemento'
import { LoginUsuario } from './pages/LoginUsuario'
import { RecuperarConta } from './pages/RecuperarConta'
function Routes() {

  useEffect(() => {
    window.oncontextmenu = function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
     };
  })
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginUsuario} />
        <Route path="/lista-estufas" component={ListaEstufa} />
        <Route path="/lista-plantas" component={ListaPlanta} />

        <Route path="/cadastro-planta/:id" component={CadastroPlanta} />
        <Route path="/estufa-ativa/:id" component={EstufaAtiva} />
        <Route path="/cadastro-usuario" component={Cadastro} />
        <Route path="/recuperar-conta" component={RecuperarConta} />
        <Route path="/lista-elemento" component={ListaElemento} />
      </Switch>
    </Router>
  )
}

export default Routes
