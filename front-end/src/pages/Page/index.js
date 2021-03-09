import React, { useEffect, useState } from 'react';

import Header from '../../components/Header'
import InputText from '../../components/Input';
import OlaLogo from '../../components/Ola';
import Select from '../../components/Select'
import Button from '../../components/Button'


import { Conteiner } from '../EstufaAtiva/styles'


import { TituloCima, TituloBaixo, Wrapper } from './styles'

function Page({ title, color, border, ...props }) {
    const [numero, setNumero] = useState(0)
    const [selectState, setSelectState] = useState(false)

    useEffect(() => {
        if (selectState != false) {
            console.log(selectState.target.value)

        }
    }, [selectState])

    return (
        <Conteiner>
            <Header icon />
            <Wrapper>

                <OlaLogo />
                <h5 style={{textAlign:'center'}}> Resgate sua conta! </h5>
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <Select labelText="Usuário: " onChange={setSelectState} label="select" elements={["Marllon Campos", 2, 3, 4, 5, 6, 7, 8, 9]} />
                <InputText idFor="password" labelText="Senha:" />

                <Button>Cadastrar</Button>


            </Wrapper>
        </Conteiner>
    )
}

export default Page;
