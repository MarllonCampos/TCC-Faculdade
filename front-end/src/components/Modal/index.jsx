import React from "react";
import {
  A,
  Background,
  Conteiner,
   TextConte,
  TextTitulo,
} from "./styles";
const Modal = ({
  id = "modal",
  onClose = () => {},
  titulo,
  conteudo,
  page
  
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <Background id="modal" onClick={handleOutsideClick}>
      <Conteiner>
        <TextTitulo>{titulo}</TextTitulo>
        <TextConte>{conteudo}</TextConte>        
      </Conteiner>
      
      <A  href={page}> Fechar </A>
    </Background>
  );
};

export default Modal;
