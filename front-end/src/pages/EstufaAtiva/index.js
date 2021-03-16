import React from 'react';
import { CardConteiner, Conteiner, ImageHorta } from "./styles"
import Header from '../../components/Header'
import Title from '../../components/Title'
import CardStatus from '../../components/cardDetalhe'
import FotoHorta from '../../assets/horta.jpg'
import { faLightbulb, faFan, faWater, faSeedling } from '@fortawesome/free-solid-svg-icons'

function EstufaAtiva() {
    return (
        <>
        <Header icon />
        <Conteiner>
            <Title title="Estufa Jão" />
            <ImageHorta src={FotoHorta} />
            <CardConteiner>
                <CardStatus cor="purple" tipo="Luz" corIcon="red" iconess={faLightbulb} ativos="4" planta_ou_ativa = "ativos" quant="10" />

                <CardStatus cor="#ff7518 " tipo="Ventilador" corIcon="red" iconess={faFan} ativos="10" planta_ou_ativa = "ativos" quant="10" />

                <CardStatus cor="blue" tipo="Irrigação" corIcon="red" iconess={faWater} ativos="7" planta_ou_ativa = "ativos" quant="10" />
            </CardConteiner>
            <CardConteiner>
                <CardStatus cor="darkgreen" tipo="Plantas" corIcon="red" iconess={faSeedling} ativos="7" planta_ou_ativa = "plantas" quant="10" />
            </CardConteiner>
        </Conteiner>
        </>
    )

}
export default EstufaAtiva;