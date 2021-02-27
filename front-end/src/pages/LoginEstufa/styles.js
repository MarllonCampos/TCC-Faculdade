import styled from 'styled-components';

export const Conteiner = styled.div`
   
    background-color: green;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    min-height:calc(100vh - 55px);
    

`;
export const Icon = styled.img`
  
  border-radius: 10%;
  width: 100px;
  border: 2px solid #ccc;
  padding: 8px;
`;
export const Label = styled.label`
  
  color: white;
  margin-right:150px; 
  
`;

export const A = styled.a`
  padding: 10px;
 color: white;
 font-size: 20px;
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

