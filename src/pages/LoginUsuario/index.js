import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";

import { ButtonContainer, A } from "./styles";
import Title from "../../components/Title";
import Button from "../../components/Button";

import Form from "../../components/Form";
import Main from "../../components/Main";
import InputText from "../../components/Input";
import Ola from "../../components/Ola";
import {ReactSwal} from '../../components/ReactSwal'
import { api } from "../../utils/api";
import {capitalizeFirstLetter} from '../../utils/capitalizeFirstLetter'

export function LoginUsuario() {
  const history = useHistory();
  const [loginState, setLoginState] = useState({
    email:'',
    senha:''
  });


  const Toast = ReactSwal.mixin({
  // Cria o modelo de pop-up
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: toast => {
    toast.addEventListener('mouseenter', ReactSwal.stopTimer)
    toast.addEventListener('mouseleave', ReactSwal.resumeTimer)
  }
})

  async function handleSubmitLogin(event) {
    event.preventDefault()
    const {email,senha} = loginState
    console.log(loginState)
    const ifRequestCancelled = axios.CancelToken.source() // Isso aqui informa para o axios quando a req. foi cancelada

    if (loginState.email === '' || loginState.email.includes('@') === false) {
      return Toast.fire({
        icon: 'error',
        title: 'Digite um email válido',
        timerProgressBar: true,
        timer: 2500
      })
    } else if (loginState.senha.length < 7 ) {
      return Toast.fire({
        icon: 'error',
        title: 'A senha deve conter no mínimo 7 caracteres',
        timerProgressBar: true,
        timer: 1000
      })
    }

    ReactSwal.fire({
      // Aparece a modal de loading para fazer o login
      title: 'Realizando Login',
      text: 'Aguarde alguns instantes e seu login será realizado',
      didOpen: () => ReactSwal.showLoading(),
      timer: 5000
    }).then(result => {
      if (result.dismiss === ReactSwal.DismissReason.timer) {
        // Ao demorar mais de 5 segundos mostra modal deerro
        ReactSwal.fire({
          icon: 'info',
          title: 'Aguarde uns instantes',
          text: 'Esta demorando mais do que o esperado',
          willClose: () => ifRequestCancelled.cancel()
        })
      }
    })
    const {data} = await api.post('/user/login/', {
      email,
      senha
    }, {
      cancelToken: ifRequestCancelled.token
    })
    if (data.status.toLowerCase() === 'ok') {
      ReactSwal.hideLoading()
      ReactSwal.fire({
        title:capitalizeFirstLetter(data.mensagem.titulo),
        text:"Login realizado com sucesso você sera redirecionado para as suas estufas",
        icon:'success',
        showConfirmButton:false,
        timer:4500,
        timerProgressBar:true,
        willClose: () => {
          const {nome,email,id} = data.mensagem.conteudo
          localStorage.setItem('userInfo',JSON.stringify({user:nome,email,id}))
          history.push('/lista-estufas')

        }
      })
    } else if (data.status.toLowerCase() ==="erro") {
      ReactSwal.fire({
        title: capitalizeFirstLetter(data.mensagem.titulo),
        text:data.mensagem.conteudo,
        icon:'error',
      })
     
    }

    


  }

  function handleInputChange(event) {
    const {name,value} = event.target
    setLoginState(prevState => ({...prevState, [name]:value}))

  }
 
  return (
    <Main>
   
        <Form
          onSubmit={(event) => handleSubmitLogin(event)}
        >
          <Ola style={{marginBottom:32}}/>
          <Title style={{marginBottom:32}}title="Entre com sua conta" />

          <InputText
            noIcon
            onChange={(ev) => handleInputChange(ev)}
            type="text"
            name="email"
            labelText="Email:"
            required
            onClick={() => localStorage.setItem('userInfo','')}
          />

          <InputText
            idFor="password"
            name="senha"
            onChange={(ev) => handleInputChange(ev)}
            labelText="Senha:"
          />

          <Button style={{marginTop:42}}>
            Acessar
          </Button>
          <ButtonContainer>
            <A to="/recuperar">Recuperar</A>
            <A to="/cadastro-usuario"> Cadastrar</A>
          </ButtonContainer>
        </Form>
      
    </Main>
  );
}

