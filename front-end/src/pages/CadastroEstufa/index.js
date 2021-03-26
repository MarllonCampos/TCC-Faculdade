import React from 'react';
import { Conteiner,Title1, } from "./styles"

import Header from '../../components/Header'

import Ola from '../../components/Ola'
import InputText from '../../components/Input';
import Button from '../../components/Button';
import Photo from '../../components/Photo';


function CadastroEstufa() {

  
  function handlechange (event) {
  console.log(event.target.value);
}
  function clickHandler(){
    console.log('Button')
  }      
    return (
        <>
        <Header icon />
        <Conteiner>
          <Ola/> 
        <Title1>Cadastro de Estufas </Title1>
        <Photo  ></Photo>
        <InputText noIcon idFor="user" labelText="Nome da Estufa:"  onChange={handlechange}/> 
        
        <Button onClick={clickHandler}>Cadastrar</Button> 
        
        </Conteiner>
        </>
        
    )
    
}
export default CadastroEstufa;
