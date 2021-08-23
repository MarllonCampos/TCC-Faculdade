import styled from 'styled-components';
import {Link} from 'react-router-dom'
export const Conteiner = styled.div`
  
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    margin:30px 0 ;

    .input[type='file'] {
    display: none
}

/* Aparência que terá o seletor de arquivo */
.label {
  background-color: #3498db;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  padding: 6px 20px
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
   display:block;
    width:80%;
    max-width:300px;
    height:45px;
    padding: 9px;
    margin:0 auto;
    margin-top:12px;
    background-color:var(--secondary);
    
    border:0;
    border-radius:600px;
    
    
    text-align:center;
    color:var(--text);
    font-family:Poppins, sans-serif;
    font-weight: 600;
    font-size:1.2rem;

    cursor:pointer;


    &:disabled {
        filter: brightness(0.55);
        &:hover {
            cursor:not-allowed;
        }
    }
   
 
  
`;



export const A = styled(Link)`

  padding: 10px;
 color: white;
 font-size: 20px;
 font-family:Roboto, sans-serif;
`;


