import React, { useState } from 'react'
import { BoxUpload,  Label } from '../../components/Photo/styles';
import { A } from "./styles"
import Button from '../../components/Button'
import Title from '../../components/Title'
import Camera from '../../assets/Camera.png'
import Form from '../../components/Form'
import Main from '../../components/Main';
import Ola from '../../components/Ola'
import ComponentModal from '../../components/Photo/Galeria/ComponentModal'
import Cameraa from '../../components/Photo/Cameraa'



function Uploader(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
 
  return (
    <Main>
      <Form>
        <Ola />
        <Title title="Faça o reconhecimento facial" />
        <BoxUpload  onClick={() => setIsModalVisible(true)}>
          <div style={{cursor: "pointer"}}>          
              
                <Label style={{cursor: "pointer"}} >
                  <img
                  
                    src={Camera}
                    draggable={"false"}
                    alt="placeholder"
                    style={{ width: "80%", height: "100%",cursor: "pointer" }}
                  />
                  <p style={{ color: "#444", textAlign: "center"  }}>
                    Click para Cadastra uma Imagem
                  </p>
                </Label>           
            
          </div>
        </BoxUpload>
        {isModalVisible ? (
      <ComponentModal onClose={() => setIsModalVisible(false)}>
        <Cameraa/>
      </ComponentModal>
       ) : null}

   
              
        
        
        
        <div className="col-md-6 offset-md-3">
          <div >
            <Button><A href="/login-estufas">Cadastrar</A></Button>

          </div>
        </div>


      </Form>
    </Main>

  )
}


export default Uploader;