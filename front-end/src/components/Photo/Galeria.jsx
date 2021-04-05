import React, { useState, useContext, useEffect } from "react";
import { BoxUpload, Label } from "./styles";
import { A, LabelInput } from "./styles";
import Button from "../../components/Button";
import * as Styled from "./styles";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import Camera from "react-html5-camera-photo";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";
import "react-html5-camera-photo/build/css/index.css";

function Galeria(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { imagem, setImagem } = useContext(UserInfoContext);

  const [dataUri, setDataUri] = useState("");
  function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);
  }

  const isFullscreen = false;
  return (
    <>
      {isModalVisible ? (
        <di
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {dataUri ? (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Styled.Img src={dataUri} isFullscreen={isFullscreen} />
          ) : (
            <Camera
              onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
              isFullscreen={isFullscreen}
            />
          )}

          <Styled.Close style={{background: '#0b8722'}}>
            <Styled.A
              onClick={(e) => {
                e.preventDefault();
                setImagem(dataUri);
                setIsModalVisible(false);
                setDataUri("");
              }}
            >
              salvar
            </Styled.A>
          </Styled.Close>

          <Styled.Close>
            <Styled.A
              onClick={(e) => {
                e.preventDefault();
                setDataUri("");
              }}
            >
              excluir
            </Styled.A>
          </Styled.Close>
        </di>
      ) : (
        <div>
          <BoxUpload onClick={() => setIsModalVisible(true)}>
            <div style={{ cursor: "pointer" }}>
              <Label style={{ cursor: "pointer" }}>
                <Styled.Img src={imagem} />

                <p style={{ color: "#444", textAlign: "center" }}>
                  Click para tirar uma foto
                </p>
              </Label>
            </div>
          </BoxUpload>

          <div>
            <Button>
              <A onClick={() => setIsModalVisible(false)}>Cadastrar</A>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
export default Galeria;
