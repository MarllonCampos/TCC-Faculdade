import React,{ useState } from "react";
import { Conteiner, Close } from "./styles";


import Cameraa from "./Cameraa";


const Photo = ({ id = "modal", onClose = () => {}, children }) => {

  return (
    <Conteiner>
      <Cameraa />

      <Close onClick={onClose}>Salvar</Close>
    </Conteiner>
  );
};
export default Photo;
