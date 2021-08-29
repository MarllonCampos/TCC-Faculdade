import React, { useState } from "react";

import { Conteiner, A } from "./styles";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { saveData, retrieveSessionData } from '../../utils/sessionStorage'
import Form from "../../components/Form";
import Main from "../../components/Main";
import InputText from "../../components/Input";
import Ola from "../../components/Ola";
import { api } from "../../utils/api";

function LoginUsuario() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  async function getApi() {
    const response = await api.get("/greenerys");
    console.log(process.env.REACT_APP_API_URL);
  }

  const handleClickLogin = async () => {
    if (usuario == null || password == null)
      return console.log("Precisa de password");
    console.log("Tentando Realizar o Login");
    setIsModalShowing(true);
    setModalTitle("Testando Realizar o Login");
    setModalMessage("Aguarde alguns instantes e seu login sera realiado");
    const response = await api.post("/login", {
      usuario,
      password,
    });
    const data = await response.data;

    if (data.message) {
      setModalTitle("Fala em realizar o login");
      setModalMessage(data.message.title);
      setModalContent(data.message.content);
      return;
    }
    setModalTitle("Login realizado com sucesso");
    setModalMessage(`Ola ${data.user}`);
    setModalContent(`Seja bem-vindo`);
    console.log(`Ola ${data.user} logado com sucesso`);

    if (saveData(data) == 'sucesso') {
        console.log(retrieveSessionData('greeneryData'))
      } else {
        console.log('Falhou em salvar')
      }
  };

  return (
    <Main>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Usuario", usuario, "senha", password);
        }}
      >
        <Ola></Ola>
        <Title title="Entre com sua conta" />

        <InputText
          noIcon
          onChange={(e) => setUsuario(e.target.value)}
          type="text"
          labelText="usuario:"
          required
        />

        <InputText
          idFor="password"
          onChange={(e) => setPassword(e.target.value)}
          labelText="Senha:"
        />

        <Button
          disabled={usuario.length === 0 || password.length === 0}
          onClick={handleClickLogin}
        >
          Acessar
        </Button>
        <Conteiner>
          <A href="/cadastro-usuario"> Me cadastra :) </A>
          <A href="/recuperar">Recuperar</A>
        </Conteiner>
      </Form>
    </Main>
  );
}

export default LoginUsuario;
