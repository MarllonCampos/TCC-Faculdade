import React, { useState, useContext, useEffect } from "react";
import * as Styled from "./styles";
import Camera from "react-html5-camera-photo";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";

import "react-html5-camera-photo/build/css/index.css";

import { UserInfoContext } from "../../contexts/UserInfoContext";
function Cameraa() {
  const { imagem, setImagem } = useContext(UserInfoContext);
  const [dataUri, setDataUri] = useState("");

  function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);
  }

  const isFullscreen = false;
  return (
    <> 
      {dataUri ?(
      <a
        style={{
          width: "40px",
          color: "white",
         
        
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.preventDefault();
          setDataUri("");
        }}
      >
        <CloseCircleOutline />
      </a>)
      : (null)}

      <Styled.BoxUpload style={{ background: " #0a7f20" }}>
        {dataUri ? (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Styled.Img  src={dataUri} isFullscreen={isFullscreen} />
        ) : (
          <Camera
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
        )}
      </Styled.BoxUpload>

      <Styled.Close>
        <Styled.A
          href="/uploader-login"
          onClick={(e) => {
            e.preventDefault();
            setImagem(dataUri);
          }}
        >
          salvar
        </Styled.A>
      </Styled.Close>
    </>
  );
}

export default Cameraa;
