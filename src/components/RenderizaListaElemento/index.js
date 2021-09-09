import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { Container, Li, LigadoDesligado } from "./styles";

export function RenderizaListaElemento({
  listaElemento,
  elem,
  ...props
}) {
  const [elementos,setElementos] = useState([])

  useEffect(() => {
    function filtraElementos() {
      setElementos(listaElemento.filter(elemento => elemento.tipoelem === elem))
    }
    filtraElementos()
  },[])

  return (
      <Container {...props}>
      <ul>
        {elementos.map(({nomeelem,ativo,id},index) => 
          <ElementoRenderizado 
            key={`${nomeelem}-${id}`} 
            index={index}
            text={nomeelem} 
            estaLigado={ativo} /> 
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
    <Li index={index} onClick={trocaEstadoElemento}>
      {text}
      <LigadoDesligado  className={`${LigarDesligarElemento ? 'active': ''}`}>
        {LigarDesligarElemento ? 'Ligado' : 'Desligado'} <span />
      </LigadoDesligado>
    </Li>
  );
}



