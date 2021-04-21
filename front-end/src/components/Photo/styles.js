import styled from 'styled-components';

export const Conter = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const Img = styled.img`
 width:95%;
 height:95%;
 border-radius: 20px;
`;

export const Background = styled.div`
 width: 100%;
 height: 100vh;
 position: absolute;
 top: 0;
 left: 0;
 z-index: 10;
 background-color: #0a7f20;
 display: flex;
 flex-direction:column;
 justify-content: center;
 align-items: center;
 `;

export const Conteiner = styled.div`
 width: 100%;
 height: 100vh;
 position: absolute;
 top: 0;
 left: 0;
 z-index: 10;
 background-color: #0a7f20;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 
`;

export const OptionConteiner = styled.div`
  background-color: #eeeeee;
  width: 22rem;
  height: 14rem;
  color: #000; 
  border-radius: 10px; 
  align-items: center;
  
  @media(max-width: 800px) {
    width: 22rem;
    height: 12rem;
  }
  @media(max-width: 400px) {
    width: 20rem;
    height: 12rem;
  }
  
`;

export const Label = styled.label`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color: white;
   
 
  
`;
export const LabelInput = styled.label`  
   
    margin:0 auto;    
    
   
    font-weight: bolder;
    color: rgb(0, 5, 0);
    font-size: x-large;  
    font-size: 30px;
    text-align: justify;
    cursor:pointer;

    @media(max-width: 800px) {
    font-size: large;
  }
  @media(max-width: 400px) {
    font-size: large;
  }


   
   
 
  
`;
export const Close = styled.button`
  background-color: #eb2828;
  
  width:17rem ;
  height: 3rem;  
  margin-top:20px;
  cursor: pointer;
  
  display: flex;
  border-radius: 10px;
  align-items:center;
  justify-content:center;
  color: white;
  @media(max-width: 800px) {
    width: 25rem;
    height: 3rem;
  }
  @media(max-width: 400px) {
    width: 18rem;
    height: 2.5rem;
  }
  

 `;

export const A = styled.a`

  padding: 10px;
 color: white;
 font-size: 20px;
`;


export const BoxUpload = styled.div`
    
    display: flex;
    justify-content: center;
    align-items:center;    
    place-items: center;
    border: 1px dashed green;
    /* padding: 36px 48px; */
    position: relative;
    cursor: pointer;
    background: #FBFBFF;
    border-radius: 20px;
    margin-bottom: 20px;

    .image-upload {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
        

        label {
            cursor: pointer;
        
            :hover {
                opacity: .8;
            }
        }

       
    }
    .input {
            background-color: red;
            color: #799CD9;
        }
    #file-upload-button{
        background-color: red;
        color: #799CD9;
    }
  

`
export const ImagePreview = styled.div`
    position: relative;
    display: flex;
    align-items:center;
    justify-content:center;
    /* cursor: pointer; */

    #uploaded-image{
        height: 15em;
        width: 15em;
        object-fit: cover;
        border-radius: 20px;
    }

    .close-icon{
        background: #000;
        border-radius: 5px;
        opacity: .8;

        position: absolute;
        z-index: 10;
        right: 15px;
        top: 20px;
        cursor: pointer;

        :hover {
            opacity: 1;
        }   
    }
`

export const TextTitulo = styled.h1`
    font-weight: bolder;
    color: rgb(0, 5, 0);
    font-size: x-large;
    text-align: center;
    padding: 10px;
    margin-left: 30px;
    margin-top: 9px;
`
