import styled from 'styled-components';


export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #0a7f20;
  position: fixed;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position:absolute;
`;

export const Modal = styled.div`
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
  background-color: #eeeeee;
  width: 30rem;
  height: 40rem;
  color: #000; 
  border-radius: 30px; 
  align-items: center;
  
  @media(max-width: 900px) {
    width: 25rem;
    height: 30rem;
  }
  @media(max-width: 400px) {
    width: 18rem;
    height: 25rem;
  }
  
`;
export const Close = styled.button`
  background-color: #eb2828;
  width:30rem ;
  height: 3rem;  
  margin-top:30px;
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


export const   TextConte  = styled.p`
    color: rgb(0, 5, 0);
    font-size: 20px;
    font-weight: bolder;
    margin-left: 40px;
    margin-top: 20px;
`

export const TextTitulo = styled.h1`
    font-weight: bolder;
    color: rgb(0, 5, 0);
    font-size: xx-large;
    text-align: center;
    padding: 10px;
`
