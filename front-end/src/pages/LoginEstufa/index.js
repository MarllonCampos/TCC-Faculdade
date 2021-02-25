import React, { useState } from 'react';
import { Conteiner, Icon, Label, A } from "./styles"
import Title from '../../components/title/index'
import LoginIcon from '../../components/loginIcon.png'
import Input from '../../components/input/input'
import Button from '../../components/button/Button'


function LoginEstufa() {
    const [login, setLogin] = useState(1)
    if (login === 1)
        return (
            <>
                <Conteiner>
                    <Icon src={LoginIcon} />
                    <Title title="Entre com sua conta" />
                    <Label>Usuario:</Label>
                    <Input />
                    <Label>Senha:</Label>
                    <Input />
                    <Button button="Acessar" />
                    <A
                        onClick={() => setLogin(2)}>
                        Me cadastra :)
                </A>

                    <A onClick={() => setLogin(3)}

                    >
                        Recuperar
                </A>
                </Conteiner>
            </>
        )
    if (login === 2) {
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
                <Button button="Acessar"  onClick={() => setLogin(1)}/>
               
            </Conteiner>
            </>
        )
    }
    if (login === 3) {
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
                <Button button="Acessar"  onClick={() => setLogin(1)}/>
               
            </Conteiner>
            </>
        )
    }

}
export default LoginEstufa;