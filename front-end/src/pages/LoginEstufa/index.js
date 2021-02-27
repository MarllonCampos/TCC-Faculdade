import React, { useState } from 'react';
import { Conteiner, Icon, Label, A, Bnt } from "./styles"
import Title from '../../components/Title'
import LoginIcon from '../../components/loginIcon.png'
import Input from '../../components/input/input'
import Button from '../../components/button/Button'


function LoginEstufa() {
    const [login, setLogin] = useState("login")

    function Cadastro() {
        setLogin("cadastro")
        console.log(login)
    }
    function Recuperar() {
        setLogin("recuperar")
    }


    if (login === "login")
        return (
            <>
                <Conteiner>
                    <Icon src={LoginIcon} />
                    <Title title="Entre com sua conta" />
                    <Label>Usuario:</Label>
                    <Input />
                    <Label>Senha:</Label>
                    <Input />
                    <Bnt onClick={() => setLogin(Cadastro)}
                    >Acessar</Bnt>
                    <A
                        onClick={() => setLogin(Cadastro)}>
                        Me cadastra :)
                </A>

                    <A onClick={() => setLogin(Recuperar)}

                    >
                        Recuperar
                </A>

                </Conteiner>
            </>
        )
    if (login === "cadastro") {
        return (
            <>
                <Conteiner>
                    <Icon src={LoginIcon} />
                    <Title title="Faça seu Cadastro" />
                    <Label>Usuario:</Label>
                    <Input />
                    <Label>Senha:</Label>
                    <Input />
                    <Label>Confirme senha:</Label>
                    <Input />
                    <Label>Email:</Label>
                    <Input />
                    <A href="/uploader-login"> <Bnt
                    >Cadastra</Bnt></A>
                </Conteiner>
            </>
        )
    }
    if (login === "recuperar") {
        return (
            <>
                <Conteiner>
                    <Icon src={LoginIcon} />
                    <Title title="Recuperar Senha" />
                    <Label>Senha:</Label>
                    <Input />
                    <Label>Confirme a Senha:</Label>
                    <Input />

                    <Bnt onClick={() => setLogin("login")}
                    >Recuperar</Bnt>

                </Conteiner>
            </>
        )
    }


}
export default LoginEstufa;