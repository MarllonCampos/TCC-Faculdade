import React, { useState } from 'react'
import Title from "../components/Title"
import Button from './button/Button'
import Input from "./input/input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFan, faWater,faSeedling } from '@fortawesome/free-solid-svg-icons'
import plantar from "./plantar.png"


const Login = (props) => {
    const [nome, setNome] = useState('Entre com a sua conta')
    const [senha, setSenha] = useState([])
    const [login, setLogin] = useState(1)

    if (login === 1)
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

                <div className="font">
                    <a className="textoM"
                        onClick={() => setLogin(2)}>
                        Me cadastra :)
                </a>
                </div>
                <div className="font">
                    <a onClick={() => setLogin(3)}
                        className="textoM"
                    >
                        Recuperar
                </a>
                </div>
            </div>

        )
    if (login === 2) {
        return (
            <div className="conteinerLogin">

                <Title title="Faça o seu cadastro" />
                <Input tipo="texto" nome="usuario" icon="user icon" />
                <Input tipo="password" nome="senha" icon="lock icon" />
                <Input tipo="password" nome="Confirma senha" icon="lock icon" />
                <Input tipo="texto" nome="Email" icon="facebook icon" />
                
               
                <button class="ui green button" onClick={() => setLogin(1)} >
                    <font className="font">
                        Cadastra
                        </font>
                </button>
            </div>

        );
    }

    if (login === 3) {
        return (
            <div className="conteinerLogin">
                <Title title="Resgatar sua senha" />

                <Input tipo="password" nome="senha" icon="lock icon" />
                <Input tipo="password" nome="Confirma senha" icon="lock icon" />

                <button class="ui green button" onClick={() => setLogin(1)} >
                    <font className="font">
                        Recuperar
                            </font>
                </button>
            </div>

        )
    }
    
}
export default Login
