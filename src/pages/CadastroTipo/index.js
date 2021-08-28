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
import { useParams } from 'react-router-dom'

function CadastroTipo() {
  const { tipo } = useParams()

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
    if (tipo == 'estufa') {
      console.log('Criar Estufa', tipoCadastro.nomeEstufa)
    } else {
      console.log('Criar Planta', tipoCadastro.nomePlanta)
    }
  }

  return (
    <>
      <Header icon />

      <Conteiner>
        <Ola style={{ marginTop: '-60px' }} />
        {tipo == 'estufa' ? (
          <Title1>Cadastro de Estufas </Title1>
        ) : (
          <Title1>Cadastro de Plantas </Title1>
        )}
        <Form onSubmit={handleSubmit(newUser)}>
          {tipo == 'estufa' ? (
            <InputText
              noIcon
              idFor="estufa"
              placeholder="Digite o nome da Estufa"
              name="nomeEstufa"
              type="text"
              labelText="Nome da Estufa:"
              register={register}
            />
          ) : (
            <InputText
              noIcon
              idFor="planta"
              placeholder="Digite o nome da Planta"
              name="nomePlanta"
              type="text"
              labelText="Nome da Planta:"
              register={register}
            />
          )}
          {errors?.nomeEstufa?.message && (
            <Modal
              style={{ marginTop: '25px' }}
              visible={false}
              titulo="Error"
              conteudo={errors?.nomeEstufa?.message}
              page="/login-estufas"
            ></Modal>
          )}
          <Button type="submit" style={{ marginTop: '25px' }}>
            Cadastrar
          </Button>
        </Form>
      </Conteiner>
    </>
  )
}
export default CadastroTipo
