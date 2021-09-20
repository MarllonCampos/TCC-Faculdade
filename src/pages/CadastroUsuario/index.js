import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Title from "../../components/Title";
import Button from "../../components/Button";
import Form from "../../components/Form";
import InputText from "../../components/Input";
import Main from "../../components/Main";
import Ola from "../../components/Ola";
import Loading from "../../components/Loading";
import { ReactSwal } from "../../components/ReactSwal";

import { api } from "../../utils/api";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

function Cadastro() {
  const history = useHistory();
  const [registerState, setRegisterState] = useState({
    nome: "",
    senha: "",
    confirmeSenha: "",
    email: "",
  });

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

  function handleInputChange(ev) {
    const { name, value } = ev.target;
    setRegisterState({ ...registerState, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const ifRequestCancelled = axios.CancelToken.source();

    if (registerState["nome"].length < 3) {
      return  Toast.fire({
        icon: "error",
        title: "O nome deve conter no mínimo 3 caracteres",
        timerProgressBar: true,
        timer: 2500,
      });

    }else if(registerState['senha'].length < 7){
      return  Toast.fire({
        icon: "error",
        title: "A senha deve conter no mínimo 7 caracteres",
        timerProgressBar: true,
        timer: 2500,
      });
    } else if (registerState['confirmeSenha'] !== registerState['senha'] ) {
      return  Toast.fire({
        icon: "error",
        title: "As senhas não coincidem",
        timerProgressBar: true,
        timer: 2500,
      });
    }else if (registerState['email'].includes('@') === false) {
      return  Toast.fire({
        icon: "error",
        title: "Insira um email válido",
        timerProgressBar: true,
        timer: 2500,
      });
    }

    ReactSwal.fire({
      title: "Realizando Cadastro",
      text: "Aguarde alguns instantes e seu login será realizado",
      didOpen: () => ReactSwal.showLoading(),
      willClose: () => ifRequestCancelled.cancel(),
      showCancelButton: false,
      showConfirmButton: false,
      timer: 5000,
    }).then((result) => {
      if (
        result.dismiss === ReactSwal.DismissReason.timer
      ) {
        ReactSwal.fire({
          icon: "info",
          title: "Aguarde alguns instates",
          text: "Esta demorando mais que o esperado",
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    });
    try {
      const { data } = await api.post("/user/register/", {
        ...registerState,
        nome: capitalizeFirstLetter(registerState["nome"]),
      });
      
          if (data.status.toLowerCase() === "ok") {
            console.log(data)

            ReactSwal.fire(
              {
                title: data.mensagem.titulo,
                icon: "success",
                text: data.mensagem.conteudo,
                timer: 3500,
                footer: "Enviando você para tela de login",
              }
            ).then((result) => {
              if (result.dissmiss === ReactSwal.DismissReason.timer) {history.push("/");}
            });
          } else if (data.status.toLowerCase() === 'erro'){
            console.log(data)
            ReactSwal.fire({
              title: data.mensagem.titulo,
              icon: "error",
              text: data.mensagem.conteudo,
              timer: 3500,
            });
          }
    }catch (error) {
      console.log(error)
      ReactSwal.fire({
        icon:"error",
        title:error,
        showConfirmButton:true,
      })
    }
  }

  return (
    <Main>
      <Form
        onSubmit={(event) => handleSubmit(event) }
        style={{ textAlign: "center" }}
      >
        <Ola></Ola>
        <Title title="Faça seu cadastro" />

        <InputText
          labelText="Nome:"
          noIcon="true"
          name="nome"
          id="nome"
          onChange={(ev) => handleInputChange(ev)}
        />

        <InputText
          labelText="Senha:"
          type="text"
          name="senha"
          id="senha"
          onChange={(ev) => handleInputChange(ev)}
        />

        <InputText
          labelText="Confirmar Senha:"
          type="text"
          name="confirmeSenha"
          id="confirmeSenha"
          onChange={(ev) => handleInputChange(ev)}
        />

        <InputText
          labelText="Email:"
          noIcon="true"
          type="email"
          name="email"
          id="email"
          onChange={(ev) => handleInputChange(ev)}
        />

        <Button
          href="/"
          onClick={handleSubmit}
          style={{ marginTop: 32 }}
        >
          Registrar
        </Button>
      </Form>
    </Main>
  );
}
export default Cadastro;
