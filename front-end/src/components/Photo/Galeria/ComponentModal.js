import React,{ useState} from 'react';
import {
  Modal,
  Conteiner,
  Close,
  TextConte,
  TextTitulo,
} from './styles'
import Cameraa from '../Cameraa'

const ComponentModal = ({id = 'modal', onClose = () =>{}, children }) => {

  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");
  
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
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

    <Modal id="modal" onClick={handleOutsideClick}>
      
        <Cameraa/>
             
        
        <input
                  id="upload-input"
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  onChange={handleImageChange}
                />
     
      <Close onClick={onClose}>Salvar</Close>
    </Modal >

  )
}

export default ComponentModal;