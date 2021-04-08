import React, { useState } from "react";
import { Conteiner, Title1, } from "./styles"

import Header from '../../components/Header'

import Ola from '../../components/Ola'
import InputText from '../../components/Input';
import Button from '../../components/Button';
import Option from '../../components/Photo/Option';




function CadastroEstufa() {

  const [dados, setDados] = useState({ nome: '' })
  const [isModalVisible, setIsModalVisible] = useState(true)



  const handleInputChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    setDados({
      ...dados,
      [event.target.name]: event.target.value
    })
  }

  const enviarDados = (event) => {
    event.preventDefault()
    console.log('enviando dados...' + dados.nome + '')
  }
  const galeria = () => {
    setIsModalVisible(false)
  }


  return (
    <>

      <Header icon />
     
        {isModalVisible ? (
          <Conteiner>
<Ola/> 
<Title1>Cadastro de Estufas </Title1>

<InputText noIcon idFor="user" labelText="Nome da Estufa:"  onChange={handleInputChange} name="nome"/> 


<Button onClick={galeria}>Escolha uma imagem</Button>
<Button onClick={enviarDados}>Cadastrar</Button>
</Conteiner>

        ) : 
        <Conteiner>
<Option />
        </Conteiner>
        
        }


      
    </>

  )

}
export default CadastroEstufa;
