/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext, useEffect,useState } from "react";
import * as Styled from './styles'
import horta from "../../assets/horta.jpg";
import { AppContext } from "../../contexts/Store";

const UseContext = () => {
 
const [troca, setTroca] = useState(false)

  
  const  {imagem, setImagem} = useContext(AppContext)

  useEffect(function(){
      if(troca === true){
          setImagem(horta)
          console.log(troca)
      }
      console.log(troca)
  },[troca])

  
  return (
    <Styled.Conteiner>
  
      
         <div className="center">
             
             <div>
         
          <button className="bnt" onClick={() => setTroca(true)}>+</button>
          <img src={imagem}/>
        </div>
      </div>

      </Styled.Conteiner>

    
  );
};

export default UseContext;
