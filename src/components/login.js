import React, { useState } from 'react'


const Login = (props) => {
    const [nome, setNome] = useState(' ')
    const [senha, setSenha] = useState([])

    return (

        <div className="conteinerLogin">
            <p className="textoG">Olá, </p>
            <p className="textoM"> Entre com sua conta</p>
            <div className="input">
                <div class="ui left icon input">
                    <input type="text" placeholder="usuario" />
                    <i class="users icon"></i>
                </div>
            </div>
            <div className="input">
                <div className="input">
                    <div class="ui left icon input">
                        <input type="text" placeholder="Senha" />
                        <i class="lock icon"></i>
                    </div>
                </div>
            </div>
            <button class="ui green button" >
                <font className="font">
                    <font className="font">
                        Acessar
                    </font>
                </font>
            </button>
            <div className="font">
                <a className="textoM"
                    href="https://reactjs.org"
                    target="_blank">
                    Me cadastra :)
                </a>
            </div>
            <div className="font">
                <a
                    className="textoM"
                    href="/cadastro"
                    target="_blank">
                    Recuperar
                </a>
            </div>
        </div>
    )
}
export default Login


