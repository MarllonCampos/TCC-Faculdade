import React from 'react';
import { Conteiner,Title1,Title2, } from "./styles"
import Header from '../../components/Header'
import Select from '../../components/Select'
import Ola from '../../components/Ola'
import InputText from '../../components/Input';
import Button from '../../components/Button';




function    CadastroElemento() {

    function handlechange (event) {
  console.log(event.target.value);
}
  function clickHandler(){
    console.log('Button')
  }      
    return (
        <>
        <Header icon/>
        <Conteiner>
           
        
            <Ola/>
            <Title1>Cadastro de Estufas </Title1>
            <Title2>Elementos da Estufa</Title2>
           
            <InputText noIcon idFor="user" placeholder="Digite o nome do Elemento" labelText="Nome do Elemento:" onchange={handlechange} />
            <Select   labelText="Tipo de elemento:" elements={["Lampada", "Ventilador", "Agua", ]}  />
             
            <Button onclick={clickHandler} >Cadastrar</Button>
        </Conteiner>
        
        </>
    )
    
}
export default CadastroElemento;
