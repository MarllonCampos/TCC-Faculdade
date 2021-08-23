import React, { useState } from 'react'
import logo from "./logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sistema2.css'

const Inicial = (props) => {
    const [term, setTerm] = useState(' ')
    const [result, setResult] = useState([])
    const maca =<FontAwesomeIcon icon={['fab', 'apple']} />

    return (

        <div className="conteiner">
            <div className="herder">
                <title>  </title>

                
            </div>

            <div class="ui card">
                <div class="content">
                    <img class="image" src={logo} />
                </div>
            </div>
            <div class='cards'>

                <div class="ui card1">
                    <p>Luz</p>
                    <lampada class="fas fa-lightbulb"></lampada>
                </div>

                <div class="ui card1">
                    <p>Ventilador</p>
                    <catavento class="fas fa-fan"></catavento>
                </div>

                <div class="ui card1">
                    <p>Irrigação</p>
                 
                   
               
                    <agua class="fas fa-water"></agua>
                    
                </div>

            </div>


        </div>
    )

}
export default Inicial