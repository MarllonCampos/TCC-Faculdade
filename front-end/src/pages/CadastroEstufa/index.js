import React from 'react';
import { Conteiner,Title1 } from "./styles"
import Header from '../../components/Header'

import Ola from '../../components/Ola'
import InputText from '../../components/Input';
import Button from '../../components/Button';
function CadastroEstufa() {
    
    return (
        <>
        <Header icon />
        <Conteiner>
          <Ola/> 
        <Title1>Cadastro de Estufas </Title1>
        <InputText noIcon idFor="user" labelText="Nome da Estufa:" /> 
        <Button>Cadastrar</Button> 
        </Conteiner>
        </>
        
    )
    
}
export default CadastroEstufa;
