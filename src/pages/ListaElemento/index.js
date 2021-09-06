import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import Header from '../../components/Header'
import { BotaoElemento, Container } from './styles'
import IrrigadorElemento from '../../assets/irrigadorElemento.svg'
import LuzElemento from '../../assets/luzElemento.svg'
import VentiladorElemento from '../../assets/ventiladorElemento.svg'
import ArrowDown from '../../assets/arrow-down-branco.svg'
import { RenderizaListaElemento } from '../../components/RenderizaListaElemento'



export function ListaElemento(){

  const {idEstufa} = useParams();
  const [setaIrrigadoresAparece,setSetaIrrigadoresAparece] = useState(false)
  const [setaLuzesAparece,setSetaLuzesAparece] = useState(false)
  const [setaVentiladoresAparece,setSetaVentiladoresAparece] = useState(false)

  
  const elementosIrrigadores = [
      {nome:'Irrigador 1', id:1, ligado: false}, 
      {nome:'Irrigador 2', id:2, ligado: true},
      {nome:'Irrigador 3', id:3, ligado: false},
      {nome:'Irrigador 4', id:4, ligado: false}
  ]
  const elementosLuzes = [
      {nome:'Luz 1', id:1, ligado: false}, 
      {nome:'Luz 2', id:2, ligado: true},
      {nome:'Luz 3', id:3, ligado: false},
      {nome:'Luz 4', id:4, ligado: false}
  ]
  const elementosVentiladores = [
      {nome:'Ventilador 1', id:1, ligado: false}, 
      {nome:'Ventilador 2', id:2, ligado: true},
      {nome:'Ventilador 3', id:3, ligado: false},
      {nome:'Ventilador 4', id:4, ligado: false}
  ]

  function reverteEstado(setEstado){
    setEstado( prevState => !prevState);
  }

  // useEffect(()=>{
  //   api.
  // },[])
  return(
    <>
      <Header />
      <Container>
        <h1>Estufa A</h1>

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
          <RenderizaListaElemento listaElemento={elementosIrrigadores} />
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
          <RenderizaListaElemento listaElemento={elementosLuzes} />
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
          <RenderizaListaElemento listaElemento={elementosVentiladores} />
        }
        

      </Container>
    </>
  )
}
