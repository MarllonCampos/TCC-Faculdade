import React, {useState, useEffect, Component} from "react";
import { useForm } from "react-hook-form";
import api from '../../utils/api'
import Form from '../../components/Form';
import { Conteiner,Title1,Title2, } from './styles'
import Header from '../../components/Header'
import Select from '../../components/Select'
import Ola from '../../components/Ola'
import InputText from '../../components/Input';
import Button from '../../components/Button';
import axios from "axios";






function  CadastroElemento() {
   

    const [portaelemnt, setportaelemnt] = useState(false)

    useEffect(() => {
        if (portaelemnt!= false) {
           console.log(portaelemnt.target.name)
            

        }
    }, [portaelemnt])
    



    const [campos, setCampos] = useState({
        
  

    });
    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }
    
    function handleFormSubmit(event){
        event.preventDefault();
        console.log(campos);
    }
    return (
        <>
        <Form onSubmit={handleFormSubmit}>
           <Header  icon />
          <Conteiner>
          <Ola/>
          <Title2>Elementos da Estufa</Title2>

            
           
            <InputText noIcon idFor="user" 
            placeholder="Digite o nome do Elemento"
            name="nomeelem"
             type="text" 
             labelText="Nome do Elemento:" 
             onChange={handleInputChange}  />

            <Select   labelText="Tipo de elemento:"  
             name="tipoelemnt"
             type="text"
             idgreen="tipo"
             option="Seleciona um elemento"
             onChange={handleInputChange}
             elements={["Agua","Ventilador","Lampada"]}
   
        />
         

            <Select     labelText="Tipo de Porta"  
            name="tipoporta"
            type="text"
            idgreen="portaelemnt"
             elements={[,1,2,3,4,5]} 
             onChange={handleInputChange}
             />

            <Button  >Cadastrar</Button>
          </Conteiner>
          </ Form>
          </>
    )

}    

 export default CadastroElemento;
