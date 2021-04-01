import React,{ useState } from 'react'
import { BoxUpload, Label } from './styles';
import { A, LabelInput } from "./styles"
import Button from '../../components/Button'
import Camera from '../../assets/Camera.png'
import Photo from './index'



function Galeria(props) {
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

return(
    <>
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
          </>
)
}
export default Galeria