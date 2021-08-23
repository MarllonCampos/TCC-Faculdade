import React, { useState, useContext, useCallback, useRef } from "react";
import Button from "../../components/Button";
import * as Styled from "./styles";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { storage } from "../../utils/firebase";
import { v4 as uuid } from "uuid";
import Webcam from "react-webcam";
import { RadioCircle } from "@styled-icons/boxicons-regular/RadioCircle";

const videoConstraints = {
  width: "400",
  height: "450",
  facingMode: "user",
};
function Galeria(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { imagem, setImagem } = useContext(UserInfoContext);
  const webcamRef = useRef(null);
  const [dataUri, setDataUri] = useState("");

  // funcão de captura imagem
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setDataUri(imageSrc);
  }, [webcamRef]);

  // Função upload para o firebase storege
  const handleUpload = () => {
    const id = uuid();
    const uploadTask = storage
      .ref(`retrievePhotos/${id}`)
      .putString(imagem, "data_url");
    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.log(error);
      },

      () => {
        storage
          .ref("retrievePhotos")
          .child(id)
          .getDownloadURL()
          .then((url) => {
            setImagem(url);
          });
      }
    );
  };

  console.log(imagem);

  const isFullscreen = false;
  return (
    <>
      {isModalVisible ? (
        <Styled.Conter>
          {dataUri ? (
            <Styled.Img src={dataUri} isFullscreen={isFullscreen} />
          ) : (
            <Styled.Conter>
              <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
              />
              <RadioCircle
                onClick={capture}
                style={{
                  position: "absolute",
                  width: "7%",
                  cursor: "pointer",
                  marginTop: "250px"
                  
                }}
              />
            </Styled.Conter>
          )}

          <Styled.Close style={{ background: "#0b8722" }}>
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
        </Styled.Conter>
      ) : (
        <div>
          <Styled.BoxUpload onClick={() => setIsModalVisible(true)}>
            <div style={{ cursor: "pointer" }}>
              <Styled.Label style={{ cursor: "pointer" }}>
                <Styled.Img src={imagem} />
                <p style={{ color: "#444", textAlign: "center" }}>
                  Click para tirar uma foto
                </p>
              </Styled.Label>
            </div>
          </Styled.BoxUpload>
          <div>
            <Button>
              <Styled.A onClick={handleUpload}>Cadastrar</Styled.A>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
export default Galeria;
