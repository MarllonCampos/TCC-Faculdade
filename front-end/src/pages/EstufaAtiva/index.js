import React from 'react';
import { CardConteiner, Conteiner, ImageHorta, ConteinerGrid, GlobalConteiner } from "./styles"
import Header from '../../components/Header'
import Title from '../../components/Title'
import CardStatus from '../../components/cardDetalhe'
import FotoHorta from '../../assets/horta.jpg'
import { faLightbulb, faFan, faWater, faSeedling } from '@fortawesome/free-solid-svg-icons'

function EstufaAtiva() {
    return (
        <GlobalConteiner>
        <Header icon />
        <Conteiner>
            <Title title="Estufa Jão" />
            <ImageHorta src={FotoHorta} />
            <ConteinerGrid>
            <CardConteiner>
                <CardStatus cor="purple" tipo="Luz" corIcon="red" iconess={faLightbulb} ativos="4" planta_ou_ativa = "ativos" quant="10" />

                <CardStatus cor="#ff7518 " tipo="Ventilador" corIcon="red" iconess={faFan} ativos="10" planta_ou_ativa = "ativos" quant="10" />

                <CardStatus cor="blue" tipo="Irrigação" corIcon="red" iconess={faWater} ativos="7" planta_ou_ativa = "ativos" quant="10" />
            </CardConteiner>
            <CardConteiner>
                <CardStatus cor="darkgreen" tipo="Plantas" corIcon="red" iconess={faSeedling} ativos="7" planta_ou_ativa = "plantas" quant="10" />
            </CardConteiner>
            </ConteinerGrid>
        </Conteiner>
        </GlobalConteiner>
    )

}
export default EstufaAtiva;