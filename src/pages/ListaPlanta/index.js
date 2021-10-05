/* eslint-disable no-throw-literal */
import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import CardPlanta from "../../components/CardPlanta";
import Header from "../../components/Header";
import InputText from "../../components/Input";
import { ReactSwal } from "../../components/ReactSwal";
import { useHistory } from "react-router-dom";

import { api } from "../../utils/api";
import { Conteiner } from "./styles";
import { BotaoMais } from "../../components/BotaoMais";


  
function AlteraPlantaForm({ id, ...props }) {
  const [nome, setNome] = useState("");

  function handleNameChange(event) {
    setNome(event.target.value);
  }

  async function handleFormSubmit(event) {
    const ifRequestCancelled = axios.CancelToken.source(); // Isso aqui informa para o axios quando a req. foi cancelada

    event.preventDefault();
    const body = {
      "id-planta": id,
      "nome-planta": nome,
    };

    try {
      const { data } = await api.put(
        "/plant/modify/",
        body,
        {
          cancelToken: ifRequestCancelled.token,
        }
      );
      if (data.status === "erro") {
        throw data;
      }
      ReactSwal.fire({
        title: data.mensagem.titulo,
        text: data.mensagem.conteudo,
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: true,
        footer:'Recarregaremos a página para as mudanças terem efeito',
        willClose:() => window.location.reload(),
      });
      return null;
    } catch (error) {
      console.log(error);
      if (error.status === "erro") {
        return ReactSwal.fire({
          title: error.mensagem.titulo,
          text: error.mensagem.conteudo,
          icon: "error",
        });
      } else {
        return ReactSwal.fire({
          icon: "error",
          title: "Ops",
          text: "Algo deu errado, nos contate para lhe ajudarmos",
          footer: "Recarregaremos a página",
          timer: 2500,
          timerProgressBar: true,
        });
      }
    }
  }

  return (
    <form onSubmit={(ev) => handleFormSubmit(ev)}>
      <InputText
        idFor="nome"
        name="Nome"
        onChange={(ev) => handleNameChange(ev)}
        labelText="Nome:"
        noIcon
        labelStyle={{ color: "#000" }}
        inputContainerStyle={{
          border: "1px solid #e0e0e6",
        }}
      />

      <Button style={{ marginTop: 48 }} type="submit">
        Alterar
      </Button>
    </form>
  );
}


export default function ListaPlanta() {
  const [plantas, setPlantas] = useState();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      let userId;
      try {
        const { id } = JSON.parse(
          localStorage.getItem("userInfo")
        );
        if (!id) {
          throw "Usuario não logado";
        }
        userId = id;
      } catch (error) {
        ReactSwal.fire({
          icon: "error",
          title: "Erro",
          content: "Você não esta logado",
          footer: "Levando-o de volta para a tela de login",
          timer: 2500,
          showCancelButton: false,
          showConfirmButton: false,
          timerProgressBar: true,
          willClose: () => history.push("/"),
        });
      }

      const { data } = await api.get("/greenery/get/", {
        headers: {
          "user-id": userId,
        },
      });
      setPlantas(data.mensagem.conteudo[0].plantas);
    }
    if (!plantas) {
      fetchData();
    }
  }, []);

  function alteraElemento(id) {
    ReactSwal.fire({
      html: <AlteraPlantaForm id={id} />,
      title:
        '<p style="font-size:22px;color:#000">Fazendo isso você alterará o nome da planta, deseja continuar?</p>',
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
    });
  }

  return (
    <>
      <Header />
      <Conteiner>
        {plantas &&
          plantas.map((planta, index) => (
              <CardPlanta
                title={planta.nomePlanta}
                date={planta.dataPlanta}
                key={planta.idPlanta}
                imagem={planta.fotoPlanta}
                onClick={() => alteraElemento(planta.idPlanta)}
              />
          ))}

        <BotaoMais to="/cadastro-planta"style={{marginTop:15}} color="green"/>
      </Conteiner>
    </>
  );
}






