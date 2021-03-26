import React, { useState } from "react";
import { BoxUpload, ImagePreview, Label } from "./styles";

import CloseIcon from "../../assets/CloseIcon.svg";
import Form from "../Form";


const Photo = ({ props, Imagem }) => {
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");

  function handleImageChange(e) {

    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
      // ok, o navegador tem suporte
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
    
      <Form>
        <BoxUpload>
          <div className="image-upload">
            {!isUploaded ? (
              <>
                <Label htmlFor="upload-input">
                  <img
                    src={Imagem}
                    draggable={"false"}
                    alt="placeholder"
                    style={{ width: "80%", height: "100%" }}
                  />
                  <p style={{ color: "#444", textAlign: "center" }}>
                    Click para Cadastra uma Imagem
                  </p>
                </Label>

                <input
                  id="upload-input"
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  onChange={handleImageChange}
                />
              </>
            ) : (
              <ImagePreview>
                <img
                  className="close-icon"
                  src={CloseIcon}
                  alt="CloseIcon"
                  onClick={() => {
                    setIsUploaded(false);
                    setImage(null);
                  }}
                />
                <img
                  id="uploaded-image"
                  src={image}
                  draggable={false}
                  alt="uploaded-img"
                />
                )
              </ImagePreview>
            )}
          </div>
        </BoxUpload>
        {isUploaded ? <h2>Type is {typeFile}</h2> : null}
      </Form>
    
  );
};

export default Photo;
