import React from 'react';
import { Conteiner, ImageLogo, Title, Label, MeuBotao} from "./styles"
import Header from '../../components/Header'
import FotoLogo from '../../components/logo.png.png'

function CadastroEstufa() {
    
    return (
        <>
        <Header/>
        <Conteiner>
           
            <ImageLogo src={FotoLogo}/>
            <Title>Cadastro de Estufas</Title>
            <Label>Nome da Estufa</Label>
            <MeuBotao>Cadastrar</MeuBotao>
        </Conteiner>
        
        </>
    )
    
}
export default CadastroEstufa;
    
