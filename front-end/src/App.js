import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header'
import Page from './pages/Page'

import Status from './components/Status'
import ListEstufas from './pages/ListEstufas'
import CadastroEstufas from './pages/CadastroEstufa'
import CadastraElementos from './pages/Cadastraelementos'
import EstufaAtiva from './pages/EstufaAtiva';
import LoginEstufa from './pages/LoginEstufa'
import Cadastro from './pages/LoginEstufa/Cadastro'
import Recuperar from './pages/LoginEstufa/Recuperar'
import Uploader from './pages/LoginEstufa/Uploader'
import DescriptionCard from './pages/DescriptionCard'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Page} />
        <Route path="/list-estufas" component={ListEstufas} />
        <Route path="/estufa-ativa" component={EstufaAtiva} />
        <Route path="/cadastro-estufas" component={CadastroEstufas} />
        <Route path="/cadastra-elementos" component={CadastraElementos} />
        <Route path="/login-estufas" component={LoginEstufa} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/recuperar" component={Recuperar} />
        <Route path="/uploader-login" component={Uploader} />
        <Route path="/description-card" render={(props) => <DescriptionCard elements={[{name:"Norte",status:true},{name:"Sul",status:false},{name:"Leste",status:true},{name:"Oeste",status:false}]} />}/>
        
      </Switch>
    </Router>
  );
}

export default App;


