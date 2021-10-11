import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import {ReactSwal} from "../../components/ReactSwal";
import { api } from "../../utils/api";
import {Link, Route, useRouteMatch} from 'react-router-dom'

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

function modalSucesso(title, content) {
  ReactSwal.fire({
    icon: "succes",
    title,
    text: content,
    timer: 2500,
    timerProgressBar: true,
  });
}

function modalFalha(title, content) {
  ReactSwal.fire({
    icon: "warning",
    title,
    text: content,
    timer: 2500,
    timerProgressBar: true,
  });
}

function modalFalhaCritica(title, content) {
  ReactSwal.fire({
    title,
    text: content,
    icon: "error",
    timer: 3000,
    footer: "Por favor contate-nos para receber suporte",
  });
}

export function RecuperarConta() {
  const {path} = useRouteMatch()
  console.log(path)
  

  return (
    <>
      <Header noIcon />
      <Route path={`${path}`} exact component={RetrieveAccountForm}/>
      <Route path={`${path}/sendCode`} component={() => <h1>Teste</h1>} />
    </>
  );
}



function RetrieveAccountForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
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
          const {data} =  api.post('/user/retrieve/', {},{
            cancelToken: ifRequestCancelled.token,
            headers: {
              email
            }
          })

          if (data.status.toLowerCase() === 'erro') throw data
          modalSucesso(data.mensagem.titulo, data.mensagem.conteudo)
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

          <Link to={`recuperar-conta/sendCode`}>SendCode </Link>
        </Form>

        
      </Container>
  )
}
const Container = styled.div`
  background-color: var(--quintiary);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 55px);

  form {
    padding-top: 15%;
    display: flex;
    flex-direction: column;
    height: 100%;
    button {
      margin-top: 24px;
      align-self: flex-end;
    }
  }
  .title-container {
    font-size: 18px;
    color: var(--text);
    font-family: Roboto, sans-serif;
    font-weight: 600;
    padding: 16px 24px;
    text-align: center;
  }
`;
