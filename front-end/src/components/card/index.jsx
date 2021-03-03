import React from 'react'
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFan, faWater } from '@fortawesome/free-solid-svg-icons'
import './Card.css'
import FotoHorta from '../../assets/horta.jpg'


const Card = props => (

    <div class="ui card">
            <img class="image" src={FotoHorta}/>
        <div class ="coluna">
            <p className="textoStatus">{props.nome}</p>
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
            
            <p className="textData">Criado em: {props.data}</p>
           
        </div>
        
        

        {/* <div class="content">
            
            
            
        </div>
        <div >
            
            
            <button class="ui yellow button">Verificar</button>
            <button class="ui blue button">Em andamento</button>

            <p className="textData">Criado em {props.data}</p>
        </div> */}
    </div>

)
export default Card