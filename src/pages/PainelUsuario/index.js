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
  const [email, setEmail] = useState(false);
  const [senha, setSenha] = useState('');
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

  }, []);


  async function handleSubmitForm(event) {
    const ifRequestCancelled = axios.CancelToken.source() // Isso aqui informa para o axios quando a req. foi cancelada

    event.preventDefault()

  
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
      senha
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
        showConfirmButton:false,
        willClose: () => {
          setSenha('')
          setApareceBotoes(false)
        }
      })
    } else {
      ReactSwal.fire({
        title: data.mensagem.titulo,
        text: data.mensagem.conteudo,
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
              {!apareceBotoes && (<a href="#alterarSenha" onClick={() => setApareceBotoes(prevState => true )}>editar</a>)}
            
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
                labelText="Nova senha"
                placeholder="Deixe branco para não trocar"
                readOnly={!apareceBotoes}
                className={`${!apareceBotoes && 'disabled' }`}
                
                />

              { apareceBotoes && (
              <div className="buttons-container" id="alterarSenha">
                <Button className="cancelar" style={{margin:0}} type="button" onClick={() => setApareceBotoes(prevState => !prevState)}> 
                  Cancelar
                </Button>
                
                <Button className="confirmar" style={{margin:0}} type="submit">
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
