import React, { useContext, useState } from "react";
import { Modal, Close } from "./styles";

import Cameraa from "./Cameraa";

const Photo = ({ id = "modal", onClose = () => {}, children }) => {
  return (
    <Modal>
      <Cameraa />

      <Close onClick={onClose}>Salvar</Close>
    </Modal>
  );
};
export default Photo;
