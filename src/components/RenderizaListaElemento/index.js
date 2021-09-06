import React, { useState } from "react";
import { Container, Li, LigadoDesligado } from "./styles";

export function RenderizaListaElemento({
  listaElemento,
  ...props
}) {
  

  return (
    <Container {...props}>
      <ul>
        {listaElemento.map(({nome,ligado,id},index) => 
          <ElementoRenderizado 
            key={`${nome}-${id}`} 
            index={index}
            text={nome} 
            estaLigado={ligado} /> 
        )}
      </ul>
    </Container>
  );
}

function ElementoRenderizado({ text,estaLigado,index, ...props }) {
  const [LigarDesligarElemento, setLigarDesligarElemento] = useState(estaLigado)
  function trocaEstadoElemento(){
    setLigarDesligarElemento(prevState => !prevState)
  }
  return (
    <Li index={index}>
      {text}
      <LigadoDesligado onClick={trocaEstadoElemento} className={`${LigarDesligarElemento ? 'active': ''}`}>
        {LigarDesligarElemento ? 'Ligado' : 'Desligado'} <span />
      </LigadoDesligado>
    </Li>
  );
}



