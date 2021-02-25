import React from 'react';
import { CardConteiner, Conteiner, ImageHorta } from "./styles"
import Header from '../../components/Header'
import Title from '../../components/title/index'
import CardStatus from '../../components/cardDetalhe'
import FotoHorta from '../../components/horta.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFan, faWater } from '@fortawesome/free-solid-svg-icons'
function EstufaAtiva() {
    return (
        <>
        <Header/>
        <Conteiner>
            <Title title="Estufa Jão" />
            <ImageHorta src={FotoHorta}/>
            <CardConteiner>
                 <CardStatus cor="red" tipo="Banana" corIcon="red" iconess={"faFan"} ativos="Ativo" quant="10"/>
                 <CardStatus cor="red" tipo="Banana" corIcon="green" iconess={faFan} ativos="Ativo" quant="10"/>
                 <CardStatus cor="red" tipo="Banana" corIcon="yellow" iconess="" ativos="Ativo" quant="10"/>
            </CardConteiner> 
        </Conteiner>
        </>
    )
    
}
export default EstufaAtiva;