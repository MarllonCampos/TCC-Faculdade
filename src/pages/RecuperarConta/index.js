import axios from "axios";
import React, { useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import {ReactSwal} from "../../components/ReactSwal";
import { api } from "../../utils/api";
import {Link, Route, useRouteMatch,useHistory} from 'react-router-dom'

import {Container} from './styles'
import { EnviarCodigo } from "./enviarCodigo";

const Toast = ReactSwal.mixin({
  // Cria o modelo de pop-up
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener(
      "mouseenter",
      ReactSwal.stopTimer
    );
    toast.addEventListener(
      "mouseleave",
      ReactSwal.resumeTimer
    );
  },
});

export function modalSucesso(title, content, closeAction=() => {},footer='') {
  ReactSwal.fire({
    icon: "success",
    title,
    text: content,
    timer: 2500,
    timerProgressBar: true,
    footer,
    willClose: closeAction
  });
}

export function modalFalha(title, content, closeAction=() => {},footer='') {
  ReactSwal.fire({
    icon: "warning",
    title,
    text: content,
    timer: 2500,
    timerProgressBar: true,
    footer,
    willClose: closeAction
  });
}



export function RecuperarConta() {
  const {path} = useRouteMatch()


  return (
    <>
      <Header noIcon />
      <Route path={`${path}`} exact component={RetrieveAccountForm}/>
      <Route path={`${path}/enviar-codigo`} component={() => <EnviarCodigo/>} />
    </>
  );
}



function RetrieveAccountForm() {
  const [email, setEmail] = useState("");
  const history = useHistory()
  const {path} = useRouteMatch()

  async function handleSubmit(event) {
    event.preventDefault();
    const ifRequestCancelled = axios.CancelToken.source(); // Isso aqui informa para o axios quando a req. foi cancelada

    if (email === "") {
      Toast.fire({
        icon: "warning",
        title: "Erro",
        text: "O email não pode estar vazio",
      });
    }else {
      ReactSwal.fire({
        // Aparece a modal de loading para fazer o login
        title: 'Verificando Existêcnia',
        text: 'Aguarde alguns instantes para verificarmos seu e-mail',
        didOpen: () => ReactSwal.showLoading(),
        timer: 5000
      }).then(result => {
        if (result.dismiss === ReactSwal.DismissReason.timer) {
          // Ao demorar mais de 5 segundos mostra modal deerro
          ReactSwal.fire({
            icon: 'info',
            text: 'Esta demorando mais do que o esperado',
            footer:'Tente novamente em 15 segundos',
            willClose: () => ifRequestCancelled.cancel()
          })
        }
      })

        try{
          const {data} =  await api.post('/user/retrieve/', {},{
            cancelToken: ifRequestCancelled.token,
            headers: {
              email
            }
          })

          if (data.status.toLowerCase() === 'erro') throw data
          localStorage.setItem('userInfo',JSON.stringify({user:"",email,id:""}))
          modalSucesso(data?.mensagem?.titulo, data?.mensagem?.conteudo, () => history.push(`${path}/enviar-codigo`))
        }catch (data) {
          modalFalha(data.mensagem.titulo, data.mensagem.conteudo)
        }
    }
  }
  return (

    <Container>
        <div className="title-container">
          <p>
            Digite seu e-mail e enviaremos o código de
            recuperação para a sua conta
          </p>
        </div>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Input
            noIcon
            idFor="Email"
            placeholder="Digite o seu email"
            type="email"
            required={true}
            labelText="Email: "
            onChange={(ev) => setEmail(ev.target.value)}
          />

          <Button
            type="submit"
            disabled={!email || email.length < 5}
          >
            Recuperar
          </Button>

        </Form>

        
      </Container>
  )
}

