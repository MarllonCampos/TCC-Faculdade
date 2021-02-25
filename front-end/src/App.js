import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header'
import Page from './pages/Page'
import Login from './components/login'
import Status from './components/Status'
import ListEstufas from './pages/ListEstufas'
import CadastroEstufas from './pages/ListEstufas'
import EstufaAtiva from './pages/EstufaAtiva';
import LoginEstufa from './pages/LoginEstufa'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Page} />
        <Route path="/list-estufas" component={ListEstufas} />
        <Route path="/estufa-ativa" component={EstufaAtiva} />
        <Route path="/cadastro-estufas" component={CadastroEstufas} />
        <Route path="/login-estufas" component={LoginEstufa} />
      </Switch>
    </Router>
  );
}

export default App;


