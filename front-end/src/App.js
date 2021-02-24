import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header'
import Teste from './pages/JP'
import Page from './pages/Page'
import Login from './components/login'
import Status from './components/Status'
import ListEstufas from './pages/ListEstufas'
import CadastroEstufas from './pages/ListEstufas'

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path='/' exact render={() => <Teste name="marlon" />} /> */}
        <Route path="/" exact component={Page} />
        <Route path="/joao" component={Teste} />
        <Route path="/list-estufas" component={ListEstufas} />
        <Route path="/cadastro-estufas" component={CadastroEstufas} />
      </Switch>
    </Router>

  );
}

export default App;


