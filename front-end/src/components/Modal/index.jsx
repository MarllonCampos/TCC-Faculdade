import React from "react";
import {
  A,
  Background,
  Conteiner,
  Close,
  TextConte,
  TextTitulo,
} from "./styles";
const Modal = ({
  id = "modal",
  onClose = () => {},
  titulo,
  conteudo,
  conteudo1,
  page,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <Background id="modal" onClick={handleOutsideClick}>
      <Conteiner>
        <TextTitulo>{titulo}</TextTitulo>
        <TextConte>{conteudo}</TextConte>
        <TextConte>{conteudo1}</TextConte>
      </Conteiner>
      <A  onClick={onClose}> Fechar </A>
    </Background>
  );
};

export default Modal;
