import React, { useState } from 'react'
import { BoxUpload, Label } from '../../components/Photo/styles';
import { A, LabelInput } from "./styles"
import Button from '../../components/Button'
import Title from '../../components/Title'
import Camera from '../../assets/Camera.png'
import Form from '../../components/Form'
import Main from '../../components/Main';

import Ola from '../../components/Ola'
import Photo from '../../components/Photo';




function Uploader(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [image, setImage] = useState(Camera);
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
    <Main>
      <Form>
        <Ola />
        <Title title="Faça o reconhecimento facial" />
        <BoxUpload onClick={() => setIsModalVisible(true)}>
          <div style={{ cursor: "pointer" }}>

            <Label style={{ cursor: "pointer" }} >
            <img
               
                src={image}
                draggable={"false"}
                alt="placeholder"
                style={{ width: "80%", height: "100%", cursor: "pointer" }}
              />
             
              <p style={{ color: "#444", textAlign: "center" }}>
                Click para tirar uma foto
              </p>
            </Label>

          </div>
        </BoxUpload>
        {isModalVisible ? (
          <Photo/>
        ) : null}
        <div >
          

<LabelInput for='selecao-arquivo'>Selecionar um arquivo</LabelInput>
          <input style={{display:'none'} }
                   id='selecao-arquivo'
                    type="file"
                    accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                    onChange={handleImageChange}
                  />

            <Button><A href="/login-estufas">Cadastrar</A></Button>
           
          </div>
        


      </Form>
    </Main>

  )
}


export default Uploader;