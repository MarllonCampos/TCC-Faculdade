import React from 'react';
import { Conteiner, ImageLogo, Title,Title1, Label,Input, MeuBotao} from "./styles"
import Header from '../../components/Header'
import FotoLogo from '../../components/logo.png'

function CadastroEstufa() {
    
    return (
        <>
        <Header/>
        <Conteiner>
           
            <ImageLogo src={FotoLogo}/>
            <Title>Ola,</Title>
            <Title1>Cadastro de Estufas </Title1>
            <Label>  Nome da Estufa:  </Label>
            <Input type="text"/>
            <MeuBotao>Cadastrar</MeuBotao>
        </Conteiner>
        
    )
    
}
export default CadastroEstufa;
    
