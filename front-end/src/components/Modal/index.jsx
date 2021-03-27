import React from 'react';
import {
  Background,
  Conteiner,
  Close,
  TextConte,
  TextTitulo,
} from './styles'
const Modal = ({ id = 'modal', onClose = () => { }, titulo, conteudo }) => {

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (

    <Background id="modal" onClick={handleOutsideClick}>
      <Conteiner>

        <TextTitulo>{titulo}</TextTitulo>
        <TextConte>{conteudo}</TextConte>



      </Conteiner>
      <Close onClick={onClose}>FECHAR</Close>
    </Background >

  )
}

export default Modal;