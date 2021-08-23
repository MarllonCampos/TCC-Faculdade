import React from 'react'

import Title from '../../components/Title'

import Form from '../../components/Form'
import Main from '../../components/Main';

import Ola from '../../components/Ola'

import Galeria from '../../components/Photo/Galeria'
import Option from '../../components/Photo/Option'





function Uploader(props) {
  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Main>
      <Form  onSubmit={onSubmit}>
        <Ola />
        <Title title="Faça o reconhecimento facial" />
        
       
        <Galeria/>
        


      </Form>
    </Main>

  )
}


export default Uploader;