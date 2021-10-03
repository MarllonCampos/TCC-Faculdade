import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import { BotaoElemento, Container } from './styles'
import IrrigadorElemento from '../../assets/irrigadorElemento.svg'
import LuzElemento from '../../assets/luzElemento.svg'
import VentiladorElemento from '../../assets/ventiladorElemento.svg'
import ArrowDown from '../../assets/arrow-down-branco.svg'
import { RenderizaListaElemento } from '../../components/RenderizaListaElemento'
import {api} from '../../utils/api'
import Loading from '../../components/Loading'
import {ReactSwal} from '../../components/ReactSwal'
import {useHistory} from 'react-router-dom'
export function ListaElemento(){
  const history = useHistory();
  const [setaIrrigadoresAparece,setSetaIrrigadoresAparece] = useState(false)
  const [setaLuzesAparece,setSetaLuzesAparece] = useState(false)
  const [setaVentiladoresAparece,setSetaVentiladoresAparece] = useState(false)
  const [estufa,setEstufa] = useState()

  function reverteEstado(setEstado){
    setEstado( prevState => !prevState);
  }

  useEffect(()=>{
    async function fetchData(){
      let userId
      try{
        let {id} = JSON.parse(localStorage.getItem('userInfo'))
        userId = id

      }
      catch(error){
        ReactSwal.fire({
          icon:'warning',
          title:'Você não esta logado',
          text: 'Será enviado para a tela de login',
          timer:3000,
          timerProgressBar:true,
          showCancelButton:false,
          showConfirmButton:false,
          willClose: () => history.push('/')
        })
        return null
      }
      try{
        const {data} = await api.get(`/greenery/get/`,{
          headers:{
            'user-id':userId
          }
        })
        if (data.status.toLowerCase() === 'erro'){

          ReactSwal.fire({
              icon:'error',
              title:data.mensagem.titulo,
              text:data.mensagem.conteudo,
              showCancelButton:false,
              showConfirmButton:false,
              willClose:() => history.goBack()

            })
          return null
        }
        
        const estufas = await data.mensagem.conteudo[0]
        setEstufa(estufas)
      }catch(error) {
        ReactSwal.fire({
          title:'Ops',
          text: 'Houve um erro no servidor tente novamente mais tarde, agradecemos pela paciência',
          timer:3500,
          timerProgressBar:true,
          showCancelButton:false,
          showConfirmButton:false,
          willClose: () => history.goBack()
        })
        return null
      }
      
    }
    if (!estufa) {
      fetchData();
    }

  })
  return(
    <>
      <Header />
      <Container>
    {!estufa ? <Loading /> : (
      <>
        <h1>{estufa?.nomeestufa}</h1>
        
        <BotaoElemento  
          onClick={() => reverteEstado(setSetaIrrigadoresAparece)} 
          className={`${setaIrrigadoresAparece ? 'semBordaInferior' : ''}`}>
          <img src={IrrigadorElemento} alt="Icone em formato de ondas para representar os irrigadores" />
          Irrigadores

          {setaIrrigadoresAparece 
            ? <img src={ArrowDown} 
                style={{height:'100%',maxWidth:20, transition:'0.2s',marginTop:3, transform:"rotate(-180deg)"}} 
                alt="Seta para cima" 
              />

            : <img src={ArrowDown} 
                style={{height:'100%',maxWidth:20, transition:'0.2s',marginTop:5}} 
                alt="Seta para baixo" 
              />
          }
        </BotaoElemento >
        {
          setaIrrigadoresAparece &&
          <RenderizaListaElemento listaElemento={estufa.elementos} elem="Água" />
        }

        <BotaoElemento 
          onClick={() => reverteEstado(setSetaLuzesAparece)}
          className={`${setaLuzesAparece ? 'semBordaInferior' : ''}`}
        >
          <img src={LuzElemento} alt="Icone em formato de lâmpada para representar as luzes" />
          Luzes

          {setaLuzesAparece 
            ? <img src={ArrowDown} 
                style={{height:'100%',maxWidth:20, transition:'0.2s',marginTop:3, transform:"rotate(-180deg)"}} 
                alt="Seta para cima" 
              />

            : <img src={ArrowDown} 
                style={{height:'100%',maxWidth:20, transition:'0.2s',marginTop:5}} 
                alt="Seta para baixo" 
              />  
          }
          
        </BotaoElemento >
        {
          setaLuzesAparece &&
          <RenderizaListaElemento listaElemento={estufa.elementos} elem="Luz" />
        }

        <BotaoElemento 
          onClick={() => reverteEstado(setSetaVentiladoresAparece)}
          className={`${setaVentiladoresAparece ? 'semBordaInferior' : ''}`}
        >
          <img src={VentiladorElemento} alt="Icone em formato de pás de ventilador para representar os ventiladores" />
          Ventiladores

          {setaVentiladoresAparece 
            ? <img src={ArrowDown} 
                style={{height:'100%',maxWidth:20, transition:'0.2s',marginTop:3, transform:"rotate(-180deg)"}} 
                alt="Seta para cima" 
              />

            : <img src={ArrowDown} 
                onClick={() => reverteEstado(setSetaVentiladoresAparece)}
                style={{height:'100%',maxWidth:20, transition:'0.2s',marginTop:5}} 
                alt="Seta para baixo" 
              />
          }
        </BotaoElemento >
        {
          setaVentiladoresAparece &&
          <RenderizaListaElemento listaElemento={estufa.elementos} elem="Vento" />
        }
      </>
    )}

      </Container>
    </>
  )
}
