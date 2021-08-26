import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import InputText from '../../components/Input'
import OlaLogo from '../../components/Ola'
import Select from '../../components/Select'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import { api } from '../../utils/api'

import { saveData, retrieveSessionData } from '../../utils/sessionStorage'
import { UserInfoContext } from '../../contexts/UserInfoContext'

import { Conteiner } from '../EstufaAtiva/styles'

import {
  TituloCima,
  TituloBaixo,
  Wrapper,
  GridContainer,
  GridItem
} from './styles'

function Page({ title, color, border, ...props }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')
  const [numero, setNumero] = useState(null)
  const [isModalShowing, setIsModalShowing] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState('')
  const [selectState, setSelectState] = useState(false)
  const { userName, setUserName, greenerys, setGreenerys, imagem, setImagem } =
    useContext(UserInfoContext)


  async function getApi(){
    const response = await api.get('/greenerys')
    console.log (response)
  }

  useEffect(() => {
    setNumero([
      { name: 'Norte', status: true },
      { name: 'Sul', status: false },
      { name: 'Leste', status: true },
      { name: 'Oeste', status: false }
    ])
  }, [])

  const handleClickLogin = async () => {
    if (email == null || password == null)
      return console.log('Precisa de password')
    console.log('Tentando Realizar o Login')
    setIsModalShowing(true)
    setModalTitle('Tentando Realizar o Login')
    setModalMessage('Aguarde alguns instantes e seu login sera realizado')
    const response = await api.post('/login', {
      email,
      password
    })
    const data = await response.data

    if (data.message) {
      setModalTitle('Falha em realizar o login')
      setModalMessage(data.message.title)
      setModalContent(data.message.content)
      return
    }
    setModalTitle('Login realizado com sucesso')
    setModalMessage(`Ola ${data.user}`)
    setModalContent(`Seja bem-vindo`)
    console.log(`Ola ${data.user} logado com sucesso`)

    if (saveData(data) == 'sucesso') {
      console.log(retrieveSessionData('greeneryData'))
    } else {
      console.log('Falhou em salvar')
    }

    setTimeout(() => {
      setIsModalShowing(false)
    }, 2000)

    setGreenerys(data.greenerys)
    setUserName(data.user)
  }

  function mostrar(e) {
    console.log(e.target.value)
  }

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
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
            <GridItem to="list-estufas">List Estufas</GridItem>
            <GridItem to="login-estufas">Login Estufa</GridItem>
            <GridItem to="cadastro">Cadastro</GridItem>
            <GridItem to="uploader-login">Login Estufa</GridItem>
            <GridItem to="recuperar">Login Estufa</GridItem>
            {numero && (
              <Link
                className="last"
                to={{
                  pathname: '/description-card',
                  elements: numero,
                  icon: 'fan'
                }}
              >
                Description Card{' '}
              </Link>
            )}
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
          disabled={email.length === 0 || password.length === 0}
          onClick={handleClickLogin}
        >
          Cadastrar
        </Button>


        <Button onClick={getApi}>
          Fetch
        </Button>
      </Wrapper>
    </Conteiner>
  )
}

export default Page
