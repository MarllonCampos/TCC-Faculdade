import styled from 'styled-components';

export const Conteiner = styled.div`
   
    background-color: green;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    margin-bottom: 50px;
   
    
    

`;
export const Icon = styled.img`

  

  width: 100px;
  border: 2px solid #ccc;
  padding: 1px;
  margin-bottom:20px;
`;
export const Label = styled.label`
  
  color: white;
   
 
  
`;

export const A = styled.a`

  padding: 10px;
 color: white;
 font-size: 30px;
`;
export const Bnt = styled.button`
margin-top:  10px;
  padding: 8px;
  width: 10em;
  height: 2em; 
 font-size: 20px;
 background-color: #21ba45 ;
 border-radius: 8em;
 color: #fff;
 border-color: white
`;

export const BoxUpload = styled.div`
    display: grid;
    margin-top: 20px;
    place-items: center;
    border: 1px dashed #799CD9;
    /* padding: 36px 48px; */
    position: relative;

    height: 350px;
    width: 350px;

    background: #FBFBFF;
    border-radius: 20px;
    margin-bottom: 30px;

    .image-upload {
        display: flex;
        flex-wrap:wrap;

        label {
            cursor: pointer;
        
            :hover {
                opacity: .8;
            }
        }

        >input {
            display: none;
        }
    }
`
export const ImagePreview = styled.div`
    position: relative;
    /* cursor: pointer; */

    #uploaded-image{
        height: 350px;
        width: 350px;
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