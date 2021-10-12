import React, { useEffect, useState } from 'react'
import Form from '../../components/Form'
import Button from '../../components/Button'
import Input from '../../components/Input'
import {Container} from './styles'
import { modalFalha, modalSucesso } from '.'
import { useHistory } from 'react-router'
import axios from 'axios'


import { api } from "../../utils/api";




export function EnviarCodigo(){
  const [code,setCode] = useState('');
  const [email, setEmail] = useState("");
  const history = useHistory()
  useEffect(() => {
    try {
      const { email } = JSON.parse(
        localStorage.getItem("userInfo")
      );
      setEmail(email)
    } catch(error) {
      if (error instanceof SyntaxError) modalFalha('Ocorreu um erro','Você não passou pela etapa de recuperação' , () => history.push('/recuperar-conta'),'O enviaremos para a tela de recuperação')
      console.error(error)
    }


  },[])

  async function handleSubmit(event){
    event.preventDefault();
    const ifRequestCancelled = axios.CancelToken.source(); // Isso aqui informa para o axios quando a req. foi cancelada

    try {
      const {data} = await api.post('/user/confirmretrieve',{
        email,
        token:code
      },{
        cancelToken:ifRequestCancelled.token
      })

      if (data.status.toLowerCase() === 'erro') throw data
      modalSucesso(data?.mensagem?.titulo, data?.mensagem?.conteudo)
    }catch (data) {
      modalFalha(data.mensagem.titulo, data.mensagem.conteudo)
    }


  }
  return (
    <Container>
      <div className="title-container">
        <p>
          Digite o código que foi enviado para seu e-mail
        </p>
      </div>

      <Form onSubmit={(event) => handleSubmit(event)}>
        <Input 
          noIcon
          idFor="code"
          placeholder="Digite o código: "
          type="text"
          required={true}
          labelText="Código: "
          onChange={(ev) => setCode(ev.target.value)}
        />

        <Button type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  )
}


















