import styled from 'styled-components';

export const Label = styled.label`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color: white;
   
 
  
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
    border: 1px dashed #799CD9;
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

        >input {
            display: none;
        }
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