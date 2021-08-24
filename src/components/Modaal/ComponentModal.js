import React from 'react';
import {
  Modal,
  Conteiner,
  Close,
  TextConte,
  TextTitulo,
} from './styles'
const ComponentModal = ({id = 'modal', onClose = () =>{}, children }) => {
  
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (

    <Modal id="modal" onClick={handleOutsideClick}>
      <Conteiner>
        
        <TextTitulo>Titulo</TextTitulo>
        <TextConte>Conteudo</TextConte>
        
        
        
      </Conteiner>
      <Close onClick={onClose}>FECHAR</Close>
    </Modal >

  )
}

export default ComponentModal;