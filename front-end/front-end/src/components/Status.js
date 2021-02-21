import React, { useState } from 'react'
import logo from "./logo.png"
import { library, icon } from '@fortawesome/fontawesome-svg-core'

const Status = (props) => {

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
                        <p className="textoStatus">Estufa 1</p>

                    </div>

                    <div class="content">
                    
                    
                    </div>
                    <div >
                        <button class="ui green button">Ativo</button>
                        <button class="ui yellow button">Verificar</button>
                        <button class="ui blue button">Em andamento</button>
                        <p className="textData">Criado em 20/01/2020</p>
                    </div>
                </div>
            </div>

        </div>
    )}
    

export default Status


