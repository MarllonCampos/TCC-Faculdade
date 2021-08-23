import React, { useState } from 'react';
import {Background} from './styles'
import ComponentModal from './ComponentModal'

function Modaal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Background>
      <button onClick={() => setIsModalVisible(true)}>Open</button>
      {isModalVisible ? (
      <ComponentModal onClose={() => setIsModalVisible(false)}
       titulo="Titulo" conteudo="Conteudo">
      </ComponentModal>
       ) : null}
    </Background>    
    );
  }
 


export default Modaal;