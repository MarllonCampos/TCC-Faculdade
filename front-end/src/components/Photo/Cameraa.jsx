import React, { useState } from "react";
import * as Styled from "./styles";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";


function Cameraa(props) {
  const [dataUri, setDataUri] = useState("");
 

  function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);
    console.log("takePhoto");
  }
  
  const isFullscreen = false;
  return (

    <div>
      <Styled.BoxUpload>
        {dataUri ? (
          <img src={dataUri} isFullscreen={isFullscreen} />
        ) : (
          <Camera
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
        )}
      </Styled.BoxUpload>

    
    </div>
  );
}

export default Cameraa;
