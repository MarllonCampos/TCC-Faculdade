import React, { useState } from 'react'

import { A } from "./styles"
import Button from '../../components/Button'
import Title from '../../components/Title'
import Camera from '../../assets/Camera.png'
import Form from '../../components/Form'
import Main from '../../components/Main';
import Ola from '../../components/Ola'
import Photo from '../../components/Photo'


function Uploader(props) {
  return (
    <Main>
      <Form>
        <Ola />
        <Title title="Faça o reconhecimento facial" />
        <Photo Imagem={Camera} ></Photo>
        <div className="col-md-6 offset-md-3">
          <div >
            <Button><A href="/login-estufas">Cadastrar</A></Button>

          </div>
        </div>


      </Form>
    </Main>

  )
}


export default Uploader;