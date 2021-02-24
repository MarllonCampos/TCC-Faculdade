import React from 'react';
import { CardConteiner, Conteiner, ImageHorta } from "./styles"
import Header from '../../components/Header'
import Title from '../../components/Title'
import CardStatus from '../../components/cardDetalhe'
import FotoHorta from '../../components/horta.jpg'

function EstufaAtiva() {
    return (
        <>
        <Header/>
        <Conteiner>
            <Title title="Estufa Jão" />
            <ImageHorta src={FotoHorta}/>
            <CardConteiner>
                 <CardStatus cor="red" tipo="Banana" corIcon="red" iconess="" ativos="Ativo" quant="10"/>
                 <CardStatus cor="red" tipo="Banana" corIcon="red" iconess="" ativos="Ativo" quant="10"/>
                 <CardStatus cor="red" tipo="Banana" corIcon="red" iconess="" ativos="Ativo" quant="10"/>
            </CardConteiner> 
        </Conteiner>
        </>
    )
    
}
export default EstufaAtiva;