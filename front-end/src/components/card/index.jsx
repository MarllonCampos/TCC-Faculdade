import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFan, faWater } from '@fortawesome/free-solid-svg-icons'
import './Card.css'
import FotoHorta from '../../assets/horta.jpg'

import {Conteiner} from "./styles"

function Card(){
    return(
        <>
        <div class="ui card">
            <img class="image" src={FotoHorta}/>
        <div class ="coluna">
            <p className="textoStatus">Estufa Jão</p>
            <div class="luz">
                <FontAwesomeIcon icon={faLightbulb} /> 
                <p class="onoff">Ativo</p> 
            </div>
            <div class="vento">
                <FontAwesomeIcon icon={faFan} /> 
                <p class="onoff">Ativo</p> 
            </div>
            <div class="agua">
                <FontAwesomeIcon icon={faWater} /> 
                <p class="onoff">Ativo</p> 
            </div>
            <p className="textData">Criado em: 23/03/2021</p>
        </div>
    </div>
    </>
    )
}


export default Card