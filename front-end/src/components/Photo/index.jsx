import React from "react";
import { Conteiner, Close } from "./styles";

import Cameraa from "./Cameraa";

const Photo = ({ id = "modal", onClose = () => {}, children }) => {
  return (
    <Conteiner>
      <Cameraa />
    </Conteiner>
  );
};
export default Photo;
