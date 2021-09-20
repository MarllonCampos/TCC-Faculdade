import React, { useState, useEffect } from "react";

import { ButtonContainer, A } from "./styles";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

import { saveData, retrieveSessionData } from "../../utils/sessionStorage";
import Form from "../../components/Form";
import Main from "../../components/Main";
import InputText from "../../components/Input";
import Ola from "../../components/Ola";
import { api } from "../../utils/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "../../components/Loading";

export function LoginUsuario() {
  const [loginState, setLoginState] = useState({
    email:'',
    senha:''
  });

  function handleSubmitLogin(event) {
    event.preventDefault()
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
          <Ola></Ola>
          <Title title="Entre com sua conta" />

          <InputText
            noIcon
            onChange={(ev) => handleInputChange(ev)}
            type="text"
            labelText="usuario:"
            required
          />

          <InputText
            idFor="password"
            onChange={(ev) => handleInputChange(ev)}
            labelText="Senha:"
          />

          <Button>
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

