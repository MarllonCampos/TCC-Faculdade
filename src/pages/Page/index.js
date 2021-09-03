import React, { useContext, useState } from 'react'
import { ReactSwal } from '../../components/ReactSwal' // Importa a biblioteca dos modais

import Header from '../../components/Header'
import InputText from '../../components/Input'
import OlaLogo from '../../components/Ola'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import { api } from '../../utils/api'

import { UserInfoContext } from '../../contexts/UserInfoContext'

import { Conteiner } from '../EstufaAtiva/styles'

import { Wrapper, GridContainer, GridItem } from './styles'

import axios from 'axios'

function Page({ title, color, border, ...props }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isModalShowing, setIsModalShowing] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState('')
  const { userName, setUserName, setGreenerys } = useContext(UserInfoContext)

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
  function verificarEmailEPassword() {}

  async function handleClickLogin() {
    const ifRequestCancelled = axios.CancelToken.source() // Isso aqui informa para o axios quando a req. foi cancelada

    if (email == null || email === '' || password == null || password === '') {
      // Se um campo não for preenchido
      return Toast.fire({
        // Mostra o pop-up de erro em cima
        icon: 'error',
        title: 'Informações Faltantes',
        timerProgressBar: true,
        timer: 1000
      })
    }
    console.log('Tentando Realizar o Login')

    ReactSwal.fire({
      // Aparece a modal de loading para fazer o login
      title: 'Realizando Login',
      text: 'Aguarde alguns instantes e seu login será realizado',
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

    // Faz a req. de login para o backend
    const response = await api.post(
      '/login',
      {
        //Corpo da requisição
        email,
        password
      },
      {
        cancelToken: ifRequestCancelled.token
      }
    )

    const data = await response.data
    ReactSwal.hideLoading() // Fecha o outro modal

    if (data.status.toLowerCase() === 'ok') {
      // Se o resultado da api deu sucesso mostra modal de sucesso
      console.log(data)
      ReactSwal.fire({
        // Ativa o modal
        title: 'Sucesso',
        text: 'Você foi logado com sucesso',
        html: <ComponentTeste />, // Aqui foi só um exemplo, ele aceita componentes react
        icon: 'info'
      })

      console.log(`Ola ${data.user} logado com sucesso`)

      setGreenerys(data.greenerys) // Coloca as estufas no estado
      setUserName(data.user) // Salva o nome do usuário no estado
    } else {
      ReactSwal.fire({
        // Se a resposta da api não foi satisfatória mostra modal de erro com conteudo do backend
        title: data.message.title,
        text: data.message.content,
        icon: 'error'
      })
    }
  }

  function mostrar(e) {
    console.log(e.target.value)
  }

  function clearModalMessage() {
    setModalContent('')
    setModalMessage('')
    setModalTitle('')
  }

  return (
    <Conteiner>
      <Header onChange={mostrar} icon />
      <Wrapper>
        {isModalShowing && (
          <Modal
            onClose={() => {
              setIsModalShowing(false)
              clearModalMessage()
            }}
            titulo={modalTitle}
            conteudo={modalMessage || ''}
            conteudo1={modalContent || ''}
          />
        )}
        <OlaLogo />
        <h5 style={{ textAlign: 'center' }}> Resgate sua conta! </h5>
        {userName && (
          <GridContainer>
            <GridItem to="cadastra-elementos">Cadastra Elementos</GridItem>
            <GridItem to="cadastro-estufas">Cadastro Estufa</GridItem>
            <GridItem to="estufa-ativa">Estufa Ativa</GridItem>
            <GridItem to="lista-estufas">List Estufas</GridItem>
            <GridItem to="login-estufas">Login Estufa</GridItem>
            <GridItem to="cadastro">Cadastro</GridItem>
            <GridItem to="uploader-login">Login Estufa</GridItem>
            <GridItem to="recuperar">Login Estufa</GridItem>
          </GridContainer>
        )}

        <InputText
          noIcon
          onChange={e => setEmail(e.target.value)}
          type="email"
          labelText="E-mail:"
          required
        />

        <InputText
          idFor="password"
          onChange={e => setPassword(e.target.value)}
          labelText="Senha:"
        />

        <Button
          // disabled={email.length === 0 || password.length === 0}
          onClick={handleClickLogin}
        >
          Cadastrar
        </Button>
      </Wrapper>
    </Conteiner>
  )
}

function ComponentTeste() {
  function handleSubmit(ev) {
    ev.preventDefault()
    console.log(ev.target)
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputText
        noIcon
        name="email"
        type="email"
        labelText="E-mail:"
        required
      />

      <InputText idFor="password" labelText="Senha:" name="password" />

      <Button type="submit"> Logar </Button>
    </form>
  )
}
export default Page
