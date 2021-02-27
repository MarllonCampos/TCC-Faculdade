import React from 'react'
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFan, faWater } from '@fortawesome/free-solid-svg-icons'
import './Card.css'


const Card = props => (

    <div class="ui card">
        <div class="content">
            <img class="image" src={logo}
            />
            <p className="textoStatus">{props.nome}</p>
        </div>
      
       
        <div class="content">
            <FontAwesomeIcon icon={faLightbulb} />
            <FontAwesomeIcon icon={faFan} />
            <FontAwesomeIcon icon={faWater} />
        </div>
            <button class="ui green button">Ativo</button>
            <button class="ui yellow button">Verificar</button>
            <button class="ui blue button">Em andamento</button>
            <p className="textData">Criado em {props.data}</p>
        
    </div>

)
export default Card