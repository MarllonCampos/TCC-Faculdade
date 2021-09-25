import React, { useEffect, useState } from "react";
import { ReactSwal } from "../ReactSwal";
import { Container, Li, LigadoDesligado } from "./styles";
import useLongPress from '../../utils/useLongPress';
import InputText from "../Input";
import Button from "../Button";
import { api } from "../../utils/api";
import axios from 'axios';

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
            estaLigado={ativo} 
            id={idElem}
          /> 
        )}
      </ul>
    </Container>
  );
}



function AlteraElementoForm({id, ...props}) {
  const [nome,setNome] = useState('');



  function handleNameChange(event) {
    setNome(event.target.value)
  }

  async function handleFormSubmit(event) {
    const ifRequestCancelled = axios.CancelToken.source() // Isso aqui informa para o axios quando a req. foi cancelada

    event.preventDefault();
    const body = {
      'elemento-id':'a',
      'elemento-nome':nome,
    }

    try {
      const {data} = await api.put('/element/modify/',body
      ,{
        cancelToken: ifRequestCancelled.token
      })
      console.log(data);
      if (data.status === 'erro') {throw data}
      return ReactSwal.fire({
        title:data.mensagem.titulo,
        text:data.mensagem.conteudo,
        timer:2500,
        timerProgressBar:true,
        showConfirmButton:true,
      })
    }catch (error) {
      console.log(error)
      if (error.status === 'erro') {
        return ReactSwal.fire({
          title:error.mensagem.titulo,
          text:error.mensagem.conteudo,
          icon:'error',
        })
      }else {
        return ReactSwal.fire({
          icon:'error',
          title:'Ops',
          text:'Algo deu errado, nos contate para lhe ajudarmos',
          footer:'Recarregaremos a página',
          timer:2500,
          timerProgressBar:true,
        })

      }
      
    }


  }
  return (
    <form onSubmit={(ev) => handleFormSubmit(ev)}>
      <InputText 
          idFor="nome"
          name="Nome"
          onChange={(ev) => handleNameChange(ev)}
          labelText="Nome:"
          noIcon
          labelStyle={{color:"#000"}}
          inputContainerStyle={{border:"1px solid #e0e0e6"}}
      />

      <Button style={{marginTop:48}} type="submit">Alterar</Button>
    </form>  
  )
}

function ElementoRenderizado({ text,estaLigado,index, id,...props }) {
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

  function alteraElemento(){
    ReactSwal.fire({
      html:<AlteraElementoForm id={id} />,
      title:'<p style="font-size:22px;color:#000">Fazendo isso você alterará o elemento, deseja continuar?</p>',
      text:'a',
      showCancelButton: true,
      showConfirmButton:false,
      cancelButtonColor: '#d33',
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


  const longPress = useLongPress(alteraElemento, trocaEstadoElemento,{delay:800})
  
  



  return (
    <Li index={index} {...longPress} className={`${LigarDesligarElemento && 'active'} `}>
      {text}
      <LigadoDesligado  className={`${LigarDesligarElemento ? 'active': ''}`}>
        {LigarDesligarElemento ? 'Ligado' : 'Desligado'} <span />
      </LigadoDesligado>
    </Li>
  );
}


