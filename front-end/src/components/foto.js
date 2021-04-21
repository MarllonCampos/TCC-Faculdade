import React, { useState } from 'react'
import Title from "../components/Title"
import Button from './button/Button'
import Input from "../components/input"

import plantar from "./plantar.png"


const foto = (props) => {

        return (

            <div className="conteinerLogin">
                
                <img class="image3" src={plantar}
                    />

                <Title title="Faça seu login" />
                <Input tipo="texto" nome="usuario" icon="user icon" />
                <Input tipo="password" nome="senha" icon="lock icon" />
                <div>
                    <Button button="Acessar" />
                </div>

               
                
               
           
                
            </div>

        )
    
    
    
}
export default foto
