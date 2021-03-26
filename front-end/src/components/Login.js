import React, { useState } from 'react'


const Login = (props) => {
    const [nome, setNome] = useState('Rafael ')
    const [senha, setSenha] = useState([])
    const [login, setLogin] = useState(true)
    const [recuperar, setRecuperar] = useState(false)
    const [label, setLabel] = useState("")
    const ReacuparSenha =() =>{
        

    }

    return (

        login === true ?

            <div className="conteinerLogin">
                <p className="textoG">Olá, </p>

                <p className="textoM">
                Entre com sua conta</p>
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
                        onClick={() => setLogin(false)}>
                        Me cadastra :)
                </a>
                </div>
                <div className="font">
                    <a onClick={() => setLogin(false)}
                        className="textoM"
                    >
                        Recuperar
                </a>
                </div>
            </div>


            : <div className="conteinerLogin">
                <p className="textoG">Olá, </p>
                <p className="textoM"> Faça o seu cadastro</p>
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
                <div className="input">
                    <div class="ui left icon input">
                        <input type="text" placeholder="usuario" />
                        <i class="lock icon"></i>
                    </div>
                </div>
                <div className="input">
                    <div class="ui left icon input">
                        <input type="text" placeholder="Email" />
                        <i class="mail icon"></i>
                    </div>
                </div>
                <button class="ui green button" onClick={() => setLogin(true)} >
                    <font className="font">
                        <font className="font">
                            Cadastra
                    </font>
                    </font>
                </button>
            </div>

    )

}


export default Login


