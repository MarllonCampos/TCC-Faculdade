import React, { useEffect, useState } from "react";
import { ReactSwal } from "../ReactSwal";
import { Container, Li, LigadoDesligado } from "./styles";

export function RenderizaListaElemento({
  listaElemento,
  elem,
  ...props
}) {
  const [elementos,setElementos] = useState([])

  useEffect(() => {
    setElementos(listaElemento.filter(elemento => elemento.tipoElem === elem))
  },[listaElemento])

  return (
      <Container {...props}>
      <ul>
        {elementos.map(({nomeElem,ativo,idElem},index) => 
          <ElementoRenderizado 
            key={`${nomeElem}-${idElem}`} 
            index={index}
            text={nomeElem} 
            estaLigado={ativo} /> 
        )}
      </ul>
    </Container>
  );
}

function ElementoRenderizado({ text,estaLigado,index, ...props }) {
  const [LigarDesligarElemento, setLigarDesligarElemento] = useState(estaLigado)
  function trocaEstadoElemento(){
    ReactSwal.fire({
      title: 'Atenção',
      text: "Ao fazer isso estará ligando o sensor, tem certeza que é isso que deseja fazer?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText:'Cancelar',

    }).then((result) => {
      if (result.isConfirmed) {
        
        ReactSwal.fire({
          title: LigarDesligarElemento ? "Desligando o sensor" : 'Ligando o sensor',
          text: "Estamos alterando o sensor aguarde um pouco",
          timer: 3500,
          showCancelButton:false,
          showConfirmButton:false,
          timerProgressBar:true,
          willClose: () =>  setLigarDesligarElemento(prevState => !prevState),
        })
        
      }
  })
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



