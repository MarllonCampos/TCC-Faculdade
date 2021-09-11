import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import {useHistory} from 'react-router-dom'
import InputText from "../../components/Input";
import { ReactSwal } from "../../components/ReactSwal";
import { api } from "../../utils/api";
import { Container } from "./styles";
import axios from 'axios'

export default function PainelUsuario() {
  const [nome, setNome] = useState(false);
  const [id, setId] = useState(false);
  const [email, setEmail] = useState(false);
  const [senha, setSenha] = useState(false);
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmeSenha, setConfirmeSenha] = useState('');
  const [apareceBotoes, setApareceBotoes] = useState(false)
  const history = useHistory();

  const Toast = ReactSwal.mixin({
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
    setId(userInfo.id)

    console.log(userInfo);
  }, []);


  async function handleSubmitForm(event) {
    const ifRequestCancelled = axios.CancelToken.source() // Isso aqui informa para o axios quando a req. foi cancelada

    event.preventDefault()
    if (!senha || senha === '' || senha === false) {
      console.log('h1',senha)
      return Toast.fire({
        // Mostra o pop-up de erro em cima
        icon: 'error',
        title: 'Por favor insira sua senha',
        timerProgressBar: true,
        timer: 2000
      })
    }
    if(novaSenha !== "" && novaSenha !== confirmeSenha) {
      return Toast.fire({
        // Mostra o pop-up de erro em cima
        icon: 'error',
        title: 'As senhas novas não coincidem',
        timerProgressBar: true,
        timer: 2000
      })
    }
    ReactSwal.fire({
      // Aparece a modal de loading para fazer o login
      title: 'Realizando Alterações',
      text: 'Aguarde alguns instantes e suas alterações serão feitas',
      didOpen: () => ReactSwal.showLoading(),
      willClose: () => ifRequestCancelled.cancel(),
      timer: 5000
    }).then(result => {
      if (result.dismiss === ReactSwal.DismissReason.timer) {
        // Ao demorar mais de 5 segundos mostra modal deerro
        ReactSwal.fire({
          icon: 'error',
          title: 'Erro Inesperado',
          text: 'O servidou demorou a responder',
          footer: 'Tente novamente em 30 seg'
        })
      }
    })
    const response = await api.put(`/user/modify/`, {
      nome,
      email,
      senha: senha,
      novaSenha:novaSenha
    }, {
      cancelToken: ifRequestCancelled.cancel()
    })
    ReactSwal.hideLoading();

    const data = await response.data
    if (data.status.toLowerCase() === 'ok'){
      ReactSwal.fire({
        icon: 'success',
        title: 'Informações realizadas com sucesso',
        text: 'Seus dados foram alterados com sucesso',
        timer:2000,
        showConfirmButton:false
      })
    } else {
      ReactSwal.fire({
        title: data.message.title,
        text: data.message.content,
        icon: 'error'
      })
    }
  }

  return (
    <>
      <Header  noPerson />
      <Container>
        {(nome || nome === "") && (
          <>
            <form onSubmit={(event) => handleSubmitForm(event)}>
            <a href="#alterarSenha" onClick={() => setApareceBotoes(prevState => true )}>editar</a>
              <InputText
                noIcon
                onChange={(e) => {return setNome(e.target.value)}}
                type="text"
                readOnly={!apareceBotoes}
                value={nome}
                labelText="Nome"
                required
                className={`${!apareceBotoes && 'disabled' }`}
                
                />


              <InputText
                noIcon
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                readOnly={!apareceBotoes}
                labelText="Email"
                className={`${!apareceBotoes && 'disabled' }`}
                />


              <InputText
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                labelText="Senha atual"
                readOnly={!apareceBotoes}
                className={`${!apareceBotoes && 'disabled' }`}
                
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
              <div className="buttons-container" id="alterarSenha">
                <Button className="cancelar" type="button" onClick={() => setApareceBotoes(prevState => !prevState)}> 
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
