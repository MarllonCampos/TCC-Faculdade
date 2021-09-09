import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import Header from '../../components/Header'
import { BotaoElemento, Container } from './styles'
import IrrigadorElemento from '../../assets/irrigadorElemento.svg'
import LuzElemento from '../../assets/luzElemento.svg'
import VentiladorElemento from '../../assets/ventiladorElemento.svg'
import ArrowDown from '../../assets/arrow-down-branco.svg'
import { RenderizaListaElemento } from '../../components/RenderizaListaElemento'
import {api} from '../../utils/api'
import Loading from '../../components/Loading'
export function ListaElemento(){
    const [setaIrrigadoresAparece,setSetaIrrigadoresAparece] = useState(false)
  const [setaLuzesAparece,setSetaLuzesAparece] = useState(false)
  const [setaVentiladoresAparece,setSetaVentiladoresAparece] = useState(false)
  const [estufa,setEstufa] = useState()
  const {idEstufa} = useParams();
  function reverteEstado(setEstado){
    setEstado( prevState => !prevState);
  }

  useEffect(()=>{
    async function fetchData(){
      const response = await api.get(`/estufas/${idEstufa}`)
      const estufas = await response.data
      setEstufa(estufas)
      
    }
    if (!estufa) {
      fetchData()
    }
  },[estufa])
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
          <RenderizaListaElemento listaElemento={estufa.elementos} elem={2} />
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
          <RenderizaListaElemento listaElemento={estufa.elementos} elem={1} />
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
          <RenderizaListaElemento listaElemento={estufa.elementos} elem={3} />
        }
      </>
    )}

      </Container>
    </>
  )
}
