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
import Modal from '../../components/Modal'

import ReactSwal from 'sweetalert2'

function CadastroEstufa() {
  const schema = yup.object().shape({
    nomeestufa: yup.string().min(2, 'Digite um nome para Estufa').required()
  })
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })
  const newUser = user => {
    console.log(user)
  }

  async function testeCliqueBotao() {
    ReactSwal.fire({
      icon: 'success',
      title: 'Sucessoo',
      text: 'Estufa cadastrada com sucesso'
    })
  }

  return (
    <>
      <Header icon />

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

          <Button type="submit" style={{ marginTop: '25px' }}>
            Cadastrar
          </Button>
        </Form>
      </Conteiner>
    </>
  )
}
export default CadastroTipo
