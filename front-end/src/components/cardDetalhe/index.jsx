
import React from 'react'
import "./CardDetalhe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFan, faWater } from '@fortawesome/free-solid-svg-icons'

import {Container, RowTop, Element, ActiveElements, Unit} from './styles'

const element = <FontAwesomeIcon icon={faFan} />


const CardStatus = props => { 
return (
    <Container cor={props.cor}>
        <RowTop>
            <Element>{props.tipo}</Element><FontAwesomeIcon icon={props.iconess}/>
        </RowTop>
        <ActiveElements>{props.ativos} ativos</ActiveElements>
        <Unit>
            <p>Instalado </p>

            {props.quant} uni
        </Unit>
    </Container>
)}

export default CardStatus