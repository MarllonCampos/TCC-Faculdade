import React, { useState, useContext, useEffect } from "react";
import { BoxUpload, Label } from "./styles";
import { A, LabelInput } from "./styles";
import Button from "../../components/Button";

import horta from "../../assets/horta.jpg";
import { UserInfoContext } from '../../contexts/UserInfoContext'

import Photo from "./index";


function Galeria(props) {
  
  const { imagem, setImagem, foto, setFoto } = useContext(UserInfoContext)
  

  const [isModalVisible, setIsModalVisible] = useState(false);

 

 

  return (
    <>
    
      <BoxUpload onClick={() => setIsModalVisible(true)}>
        <div style={{ cursor: "pointer" }}>
          <Label style={{ cursor: "pointer" }}>
            <img
              src={imagem}
              
            />

            <p style={{ color: "#444", textAlign: "center" }}>
              Click para tirar uma foto
            </p>
          </Label>
        </div>
      </BoxUpload>
      {isModalVisible ? <Photo /> : null}

      <div>
        <Button>
          <A href="/login-estufas">Cadastrar</A>
        </Button>
       
      </div>
    </>
  );
}
export default Galeria;
