import React, { useState } from 'react'

import Title from '../../components/Title'
import Camera from '../../assets/Camera.png'
import Form from '../../components/Form'
import Main from '../../components/Main';

import Ola from '../../components/Ola'
import Photo from '../../components/Photo';
import Galeria from '../../components/Photo/Galeria'



function Uploader(props) {
  
  return (
    <Main>
      <Form>
        <Ola />
        <Title title="Faça o reconhecimento facial" />
        
        <Galeria/>


      </Form>
    </Main>

  )
}


export default Uploader;