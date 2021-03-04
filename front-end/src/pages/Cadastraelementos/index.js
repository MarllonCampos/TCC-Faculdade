import React from 'react';
import { Conteiner,Title1,Title2, } from "./styles"
import Header from '../../components/Header'
import Select from '../../components/Select'
import Ola from '../../components/Ola'
import InputText from '../../components/Input';
import Button from '../../components/Button';


function    CadastroElemento() {
    
    return (
        <>
        <Header icon/>
        <Conteiner>
           
        
            <Ola/>
            <Title1>Cadastro de Estufas </Title1>
            <Title2>Elementos da Estufa</Title2>
           
            <InputText noIcon idFor="user" labelText="Nome do Elemento:" />
            <Select  selected disabled="Seleciona uma opcao" labelText="Tipo de elemento:" elements={[,"Lampada", 3, 4, 5, 6, 7, 8, 9]} />

            
            <Button>Cadastrar</Button>
        </Conteiner>
        
        </>
    )
