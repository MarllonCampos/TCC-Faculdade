import React, { useState } from "react";
import { Conteiner, Title1 } from "./styles";

import * as yup from "yup";

import Header from "../../components/Header";
import Form from "../../components/Form";
import Ola from "../../components/Ola";
import InputText from "../../components/Input";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import { localData } from "../../utils/localStorage";
import { api } from "../../utils/api";
import { ReactSwal } from "../../components/ReactSwal";
import axios from "axios";

function CadastroTipo() {
  const { id } = useParams();
  const [nomePlanta,setNomePlanta] = useState(0);

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

  async function cadastradoSucesso(title, content) {
    ReactSwal.fire({
      position: "center",
      icon: "success",
      title: "Planta cadastrada com sucesso!",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  async function cadastradoFalha(title, content) {
    ReactSwal.fire({
      position: "center",
      icon: "error",
      title,
      content,
      showConfirmButton: false,
      timer: 1500,
    });
  }



  async function newPlant(ev) {
    ev.preventDefault()
    const ifRequestCancelled = axios.CancelToken.source(); // Isso aqui informa para o axios quando a req. foi cancelada

    const userInfo = localData("userInfo");
    if (nomePlanta.length < 3) {
      return Toast.fire({
        icon:'warning',
        title:'Erro',
        text:'O nome da planta deve conter no mínimo 3 caracteres',

      })
    }

    ReactSwal.fire({
      // Aparece a modal de loading para fazer o login
      title: 'Realizando Cadastro',
      text: 'Aguarde alguns instantes e sua planta será cadastrada',
      didOpen: () => ReactSwal.showLoading(),
      timer: 5000
    }).then(result => {
      if (result.dismiss === ReactSwal.DismissReason.timer) {
        // Ao demorar mais de 5 segundos mostra modal deerro
        ReactSwal.fire({
          icon: 'info',
          title: 'Aguarde uns instantes',
          text: 'Esta demorando mais do que o esperado',
          footer:'Tente novamente em 15 segundos',
          willClose: () => ifRequestCancelled.cancel()
        })
      }
    })
    try {
      const {data} = await api.post(
        "/plant/register/",
        {
          "id-estufa": id,
          "nome-planta": nomePlanta
        },
        {
          cancelToken: ifRequestCancelled.token,
        }
      );

      if (data.status.toLowerCase() ===  'erro') throw data

      cadastradoSucesso(data.mensagem.titulo,data.mensagem.conteudo)
    }catch(data) {
      cadastradoFalha(data.mensagem.titulo,data.mensagem.conteudo)
    }
    
  }

  return (
    <>
      <Header />

      <Conteiner>
        <Ola style={{ marginTop: "-60px" }} />

        <Title1>Cadastro de Plantas </Title1>

        <Form onSubmit={newPlant}>
          <InputText
            noIcon
            idFor="planta"
            placeholder="Digite o nome da Planta"
            name="nomePlanta"
            type="text"
            labelText="Nome da Planta:"
            onChange={((ev) => setNomePlanta(ev.target.value))}
          />

          <Button
            type="submit"
            style={{ marginTop: "25px" }}
          >
            Cadastrar
          </Button>
        </Form>
      </Conteiner>
    </>
  );
}
export default CadastroTipo;
