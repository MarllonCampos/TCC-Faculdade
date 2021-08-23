import React, { useState } from "react";
import { OptionConteiner, TextTitulo, LabelInput } from "./styles";
import Galeria from "./Galeria";
import { CameraFill } from "@styled-icons/bootstrap/CameraFill";
import { PhotoCameraBack } from "@styled-icons/material-sharp/PhotoCameraBack";
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline';
import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
const Option = () => {
  const [state, setState] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");

  function handleImageChange(e) {
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
     
    }
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
   <>
      
      <OptionConteiner>
        <TextTitulo>Escolha da imagem com</TextTitulo>
       
        <div style={{ display: "flex" }}>
        <LabelInput>
            <CameraFill  onClick={() => setIsModalVisible(true)}             
              style={{ width: "16%", padding: "10px", cursor: "pointer" }}
            /> Camera
          </LabelInput>
        </div>
        <div style={{ display: "flex" }}>
          <LabelInput for="selecao-arquivo">
            <PhotoCameraBack
              for="selecao-arquivo"
              style={{ width: "16%", padding: "10px", cursor: "pointer" }}
            /> Galeria
          </LabelInput>
          <input
            style={{ display: "none" }}
            id="selecao-arquivo"
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleImageChange}
          />

         
        </div>
      </OptionConteiner>
      {isModalVisible ? <Galeria /> : null}
    </>
  );
};

export default Option;
