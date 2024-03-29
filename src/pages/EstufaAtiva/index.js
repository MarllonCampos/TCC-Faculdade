import React, { useEffect, useState } from 'react'
import {
  faLightbulb,
  faFan,
  faWater,
  faSeedling
} from '@fortawesome/free-solid-svg-icons'
import { useHistory, useLocation } from 'react-router'

import Header from '../../components/Header'
import Title from '../../components/Title'
import CardStatus from '../../components/CardDetalhe'
import FotoHorta from '../../assets/horta.jpg'

// import { retrieveSessionData } from '../../utils/sessionStorage'
import { Conteiner, ImageHorta, ConteinerGrid, Back } from './styles'

function EstufaAtiva() {
  const { elemento, image, titulo } = useLocation()
  const [estadoElemento, setEstadoElemento] = useState(elemento)
  const [estadoImagem, setEstadoImagem] = useState(image)
  const [estadoTitulo, setEstadoTitulo] = useState(titulo)
  const [filtroLuz, setFiltroLuz] = useState()
  const [filtroAgua, setFiltroAgua] = useState()
  const [filtroVentilador, setFiltroVentilador] = useState()
  const [filtroPlantas, setFiltroPlantas] = useState()
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  useEffect(() => {
    if (!estadoElemento) {
      // const elementosCompleto = retrieveSessionData('greeneryData')
      // console.log(elementosCompleto)
    }
    setFiltroLuz(estadoElemento.filter(el => el.tipoelem == 'Luz'))
    setFiltroAgua(estadoElemento.filter(el => el.tipoelem == 'Água'))
    setFiltroVentilador(estadoElemento.filter(el => el.tipoelem == 'Vento'))
    // setFiltroPlantas ( estadoElemento.filter(el => el.tipoelem == "Planta"))
    setFiltroPlantas([])
  }, [])

  return (
    <>
      <Header />
      {filtroLuz && (
        <Conteiner>
          <Title style={{ marginTop: '50px' }} title={titulo} />
          <ImageHorta src={image} />
          <ConteinerGrid>
            <CardStatus
              elementos={filtroLuz}
              cor="purple"
              tipo="Luz"
              corIcon="red"
              iconess={faLightbulb}
              planta_ou_ativa="ativos"
              ativos={filtroLuz.filter(el => el.ativo == 1).length}
              quant={filtroLuz.length}
            />

            <CardStatus
              elementos={filtroVentilador}
              cor="#ff7518 "
              tipo="Ventilador"
              corIcon="red"
              iconess={faFan}
              planta_ou_ativa="ativos"
              ativos={filtroVentilador.filter(el => el.ativo == 1).length}
              quant={filtroVentilador.length}
            />

            <CardStatus
              elementos={filtroAgua}
              cor="blue"
              tipo="Irrigação"
              corIcon="red"
              iconess={faWater}
              planta_ou_ativa="ativos"
              ativos={filtroAgua.filter(el => el.ativo == 1).length}
              quant={filtroAgua.length}
            />

            <CardStatus
              lastItem={true}
              elementos={filtroPlantas}
              cor="darkgreen"
              tipo="Plantas"
              corIcon="red"
              iconess={faSeedling}
              planta_ou_ativa="plantas"
              ativos={filtroPlantas.filter(el => el.ativo == 1).length}
              quant={filtroPlantas.length}
            />
          </ConteinerGrid>
          ): 'LOADING'}
        </Conteiner>
      )}
    </>
  )
}
export default EstufaAtiva
