import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Conteiner, Title1 } from './styles'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Header from '../../components/Header'
import Form from '../../components/Form'
import Ola from '../../components/Ola'
import InputText from '../../components/Input'
import Button from '../../components/Button'
import { useParams } from 'react-router-dom'
import { localData } from '../../utils/localStorage'
import { api } from '../../utils/api'
import { ReactSwal } from '../../components/ReactSwal'

function CadastroTipo() {
  const { tipo } = useParams()

  async function cadastradoSucesso() {
    ReactSwal.fire({
      position: 'center',
      icon: 'success',
      title: 'Planta cadastrada com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  async function cadastradoFalha() {
    ReactSwal.fire({
      position: 'center',
      icon: 'error',
      title: 'Não foi possível fazer cadastro! \n\n Tente novamente!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  let schema

  if (tipo == 'estufa') {
    schema = yup.object().shape({
      nomeEstufa: yup.string().min(2, 'Digite um nome para Estufa').required()
    })
  } else {
    schema = yup.object().shape({
      nomePlanta: yup.string().min(2, 'Digite um nome para Planta').required()
    })
  }

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })
  async function newUser(tipoCadastro, ...rest) {
    const userInfo = localData('userInfo')
    console.log(userInfo)
    const email = userInfo.email
    console.log(email)
    if (tipo == 'estufa') {
      console.log('Criar Estufa', tipoCadastro.nomeEstufa)
      const resposta = await api.post(
        '/estufas',
        {
          nomeEstufa: tipoCadastro.nomeEstufa
        },
        { headers: { 'User-Email': email } }
      )
      console.log(resposta)
    } else {
      console.log('Criar Planta', tipoCadastro.nomePlanta)
      const resposta = await api.post('/plantas', {
        nomePlanta: tipoCadastro.nomePlanta
      })
      console.log(resposta)
    }
  }

  return (
    <>
      <Header />

      <Conteiner>
        <Ola style={{ marginTop: '-60px' }} />

        <Title1>Cadastro de Plantas </Title1>

        <Form onSubmit={handleSubmit(newUser)}>
          <InputText
            noIcon
            idFor="planta"
            placeholder="Digite o nome da Planta"
            name="nomePlanta"
            type="text"
            labelText="Nome da Planta:"
            register={register}
          />

          <Button
            onClick={cadastradoFalha}
            type="submit"
            style={{ marginTop: '25px' }}
          >
            Cadastrar
          </Button>
        </Form>
      </Conteiner>
    </>
  )
}
export default CadastroTipo
