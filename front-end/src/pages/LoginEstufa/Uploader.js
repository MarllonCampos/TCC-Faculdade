import React,{useState} from 'react'
import axios from 'axios';
import { Conteiner, Icon, Label, A , BoxUpload,ImagePreview} from "./styles"
import Button from '../../components/Button'
import Title from '../../components/title'
import Camera from '../../assets/Camera.png'
import user from '../../assets/user.png'

import Main from '../../components/Main';

import CloseIcon from "../../assets/CloseIcon.svg";



function Uploader() {
    const [image, setImage] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);
    const [typeFile, setTypeFile] = useState("");
  
    function handleImageChange(e) {
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

{/*class Uploader extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedFile: '',
        }

        this.handleChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
        })
    }

    submit() {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = "http://localhost:8000/upload.php";

        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.warn(res);
            })

    }

render() {*/}

        return (
            <Main>
<Conteiner>
                    <Icon src={user} />
                    <Title title="Faça o reconhecimento facial" />
                   
                    <BoxUpload>
          <div className="image-upload">
            {!isUploaded ? (
              <>
                <label htmlFor="upload-input">
                  <img
                    src={Camera}
                    draggable={"false"}
                    alt="placeholder"
                    style={{ width: 300, height: 300 }}
                  />
                  <p style={{ color: "#444" }}>Click para Cadastra uma Imagem</p>
                </label>

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
                {typeFile.includes("video") ? (
                  <video
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    controls
                    autoPlay
                    alt="uploaded-img"
                  />
                ) : (
                  <img
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    alt="uploaded-img"
                  />
                )}
              </ImagePreview>
            )}
          </div>
        </BoxUpload>
        {isUploaded ? <h2>Type is {typeFile}</h2> : null}

                   
                    <div className="col-md-6 offset-md-3">
                        <div > 
                            <Button><A href="/login-estufas">Cadastrar</A></Button>
                        
                        </div>
                    </div>


                </Conteiner>
            </Main>
           
        )
    }


export default Uploader;