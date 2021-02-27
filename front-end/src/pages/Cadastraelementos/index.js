import React from 'react';
import { Conteiner, ImageLogo, Title,Title1,Title2, Label,Input,Select, MeuBotao} from "./styles"
import Header from '../../components/Header'
import FotoLogo from '../../components/logo.png'

function CadastroElemento() {
    
    return (
        <>
        <Header/>
        <Conteiner>
           
            <ImageLogo src={FotoLogo}/>
            <Title>Ola,</Title>
            <Title1>Cadastro de Estufas </Title1>
            <Title2>Elementos da Estufa</Title2>
            <Label>  Nome do Elemento:  </Label>
            <Input type="text"/>
            <Select name="select">
            <option value="">Lampada</option>
            <option value="" selected>Seleciona um Elemento</option>
            <option value=""></option>
            </Select>
            <MeuBotao>Cadastrar</MeuBotao>
        </Conteiner>
        
        </>
    )
    
}
export default CadastroElemento;
