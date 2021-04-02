import React, {useEffect, useState } from "react";

import { Conteiner,Title1,Title2, } from "./styles"
import Header from '../../components/Header'
import Select from '../../components/Select'
import Ola from '../../components/Ola'
import InputText from '../../components/Input';
import Button from '../../components/Button';




function  CadastroElemento() {
    const [selectState, setSelectState] = useState(false)

    useEffect(() => {
        if (selectState != false) {
            console.log(selectState.target.value)

        }
    }, [selectState])
 
        
    

       const [dados, setDados] = useState({nome:''})

  
     const handleInputChange = (event) => {
          console.log(event.target.name)
           console.log(event.target.value)
          setDados({
              ...dados,
              [event.target.name] : event.target.value
          })
      }
  
      const enviarDados = (event) => {
        event.preventDefault()
        console.log('enviando dados...' + dados.nome+''+ selectState+'' )
    }
    return (
        <>
        <Header icon/>
        <Conteiner>
           
        
            <Ola/>
            <Title1>Cadastro de Estufas </Title1>
            <Title2>Elementos da Estufa</Title2>
           
            <InputText noIcon idFor="user" placeholder="Digite o nome do Elemento"
             labelText="Nome do Elemento:" onChange={handleInputChange} name="nome" />
            <Select   labelText="Tipo de elemento:"  
             elements={["Lampada", "Ventilador","Agua"]} 
             onChange={setSelectState} label="select"
             />
             
            <Button onClick={enviarDados} >Cadastrar</Button>
        </Conteiner>
        
        </>
    )
    
}
export default CadastroElemento;
