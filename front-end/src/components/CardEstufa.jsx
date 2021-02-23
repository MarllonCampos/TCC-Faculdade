import React, { useState } from 'react'
import './CardEstufa.css'
import horta from "./horta.jpg"
import CardStatus from "./CardStatus"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFan, faWater } from '@fortawesome/free-solid-svg-icons'



const CardEstufa = (props) => {

    return (

        <div conteinerEstufa >
            <div className="herder" />



            <div className="conteinerEstufa">
                <div class="ui card4">

                    <img class="image2" src={horta}
                    />


                </div>

                <CardStatus tipo="luz" ativos="6" quant="3" iconess={faLightbulb} /> 
                <CardStatus tipo="luz" ativos="7" quant="4" cor="Gold" corIcon="yellow" iconess={faFan} />
                <CardStatus tipo="luz" ativos="3" quant="5" cor="blue" corIcon="SkyBlue" iconess={faWater} /> 

            </div>

        </div>

    )
}


export default CardEstufa



