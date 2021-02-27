
import React from 'react'
import "./CardDetalhe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFan, faWater } from '@fortawesome/free-solid-svg-icons'
const element =<FontAwesomeIcon icon={faFan}/>


const CardStatus = props => (
       
    
 <div class="ui card2" style={{backgroundColor: props.cor}}>
        <p className="textoTopo">{props.tipo}</p>
        <div class="ui card2" id="icone1"  style={{backgroundColor: props.corIcon}}>
            <div>
                <FontAwesomeIcon id="icone" className="icone" icon={props.iconess} />
            </div>
            <h1 className="ativos">{props.ativos} Ativos


                    </h1>
            <div className="instalado">
                <p className="textoTopo">
                    Instalado
                    </p>
                <p className="textoTopo">  {props.quant} uni</p>
            </div>

        </div>
    </div>
)
export default CardStatus