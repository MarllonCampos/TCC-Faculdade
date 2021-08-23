import React, { useState } from 'react'
import logo from "./logo.png"

const Inicial = (props) => {
    const [term, setTerm] = useState(' ')
    const [result, setResult] = useState([])

    return (

        <div className="conteiner">
            <div className="herder">
                <title>  </title>

            </div>
            <div>
                <div class="ui card">
                    <div class="content">
                        <img class="image" src={logo}
                        />
                        <p className="texto3">Estufa 1</p>

                    </div>

                    <div class="content">
                    <lampada class="fas fa-lightbulb"></lampada>
                    <catavento class="fas fa-fan"></catavento>
                    <agua class="fas fa-water"></agua>
                    
                    </div>
                    <div >
                        <button class="ui green button">Ativo</button>
                        <button class="ui yellow button">Verificar</button>
                        <button class="ui blue button">Em andamento</button>
                        <p className="textCriado">Criado em 20/02/2020</p>
                    </div>

                    <div>


                    </div>

                </div>
            </div>

        </div>
    )

}
export default Inicial