import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const ButtonContainer= styled.div`
  
   
    display:flex;
    width:80vw;
    margin:0 auto;
    margin-top: 32px;
    max-width:300px;
    align-items:center;
    justify-content: space-between;

    a {
      font-family:Roboto,sans-serif;
      font-size:1.2rem;
      color:var(--text);
      text-decoration:none;
    }


    
    

`;

export const Label = styled.label`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color: white;
   
 
  
`;

export const A = styled(Link)`
`;


