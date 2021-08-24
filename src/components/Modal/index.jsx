import React,{ useState } from "react";
import { A, Background, Conteiner, TextConte, TextTitulo } from "./styles";
import { Close } from "@styled-icons/evaicons-solid/Close";

const Modal = ({
  id = "modal",
  onClose = () => {},
  titulo,
  conteudo,
  visible,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  const [isModalVisible, setIsModalVisible] = useState(true)
  
  
  return (
    <>
      {isModalVisible ? (
           <Background>
           <Conteiner>
            
             <TextTitulo>{titulo}</TextTitulo>
             <TextConte>{conteudo}</TextConte>
           </Conteiner>
           <A to="#" onClick={() => setIsModalVisible( !isModalVisible) }>
             Fechar
           </A>
         </Background>

      ) : null}
   
    </>
  );
};

export default Modal;
