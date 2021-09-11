import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import Header from "../../components/Header";

import InputText from "../../components/Input";
import Loading from "../../components/Loading";
import { ReactSwal } from "../../components/ReactSwal";
import { Container } from "./styles";

export default function PainelUsuario() {
  const [nome, setNome] = useState(false);
  const [email, setEmail] = useState(false);
  const [senha, setSenha] = useState(false);
  const [novaSenha, setNovaSenha] = useState(false);
  const [confirmeSenha, setConfirmeSenha] = useState(false);
  const [apareceBotoes, setApareceBotoes] = useState(false)
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(
      localStorage.getItem("userInfo")
    );

    if (!userInfo) {
      return ReactSwal.fire({
        title: "Você não esta logado",
        text: "Será enviado para a tela de login",
        timer: 4500,
        timerProgressBar: true,
        showCancelButton: false,
        showConfirmButton: false,
        willClose: () => history.push("/"),
      });
    }

    setNome(userInfo.user)
    setEmail(userInfo.email)

    console.log(userInfo);
  }, []);
  return (
    <>
      <Header noPerson />
      <Container>
        {nome && (
          <>
            <form>
            <a onClick={() => setApareceBotoes(prevState => !prevState )}>editar</a>
              <InputText
                noIcon
                onChange={(e) => setNome(e.target.value)}
                type="text"
                value={nome}
                labelText="Nome"
                required
                
              />


              <InputText
                noIcon
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                labelText="Email"
              />


              <InputText
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                labelText="Senha atual"
                required
              />


              <InputText
                onChange={(e) => setNovaSenha(e.target.value)}
                type="password"
                labelText="Nova senha"
              />


              <InputText
                onChange={(e) => setConfirmeSenha(e.target.value)}
                type="password"
                labelText="Confirme a senha"
              />

              { apareceBotoes && (
              <div className="buttons-container">
                <Button className="cancelar" onClick={() => apareceBotoes(prevState => !prevState)}> 
                  Cancelar
                </Button>
                
                <Button className="confirmar" type="submit">
                  Confirmar
                </Button>
              </div>)}
            </form>
          </>
        )}
      </Container>
    </>
  );
}
