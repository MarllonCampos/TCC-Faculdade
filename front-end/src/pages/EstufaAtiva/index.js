import React from 'react';
import { CardConteiner, Conteiner, ImageHorta } from "./styles"
import Header from '../../components/Header'
import Title from '../../components/Title'
import CardStatus from '../../components/cardDetalhe'
import FotoHorta from '../../assets/horta.jpg'
import { faLightbulb, faFan, faWater } from '@fortawesome/free-solid-svg-icons'

function EstufaAtiva() {
    return (
        
        <Conteiner>
        <Header icon />
            <Title title="Estufa Jão" />
            <ImageHorta src={FotoHorta}/>
            <CardConteiner>
                 <CardStatus cor="purple" tipo="Ventilador" corIcon="red" iconess={faLightbulb} ativos="4" quant="10"/>
             
                 <CardStatus cor="#ff7518 " tipo="Ventilador" corIcon="red" iconess={faFan} ativos="10" quant="10"/>
             
                 <CardStatus cor="blue" tipo="Ventilador" corIcon="red" iconess={faWater} ativos="7" quant="10"/>
             
            </CardConteiner> 
        </Conteiner>
        
    )
    
}
export default EstufaAtiva;