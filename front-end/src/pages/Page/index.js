import React, { useState } from 'react';

import Header from '../../components/Header'
import InputText from '../../components/Input';
import OlaLogo from '../../components/Ola';
import Select from '../../components/Select'
import { Conteiner } from '../EstufaAtiva/styles'


import { TituloCima, TituloBaixo } from './styles'

function Page({ title, color, border, ...props }) {
    const [numero, setNumero] = useState(0)

    function aumentar() {
        setNumero(numero + 1)
    }

    function diminuir() {
        setNumero(numero - 1)
    }

    return (
        <>
            <Header icon />
            <Conteiner>
                <OlaLogo />
                <InputText noIcon idFor="user" labelText="Usuário:"/>
                <Select labelText="Usuário: " label="select" elements={[1,2,3,4,5,6,7,8,9]} />
                <InputText idFor="password" labelText="Senha:"/>


            </Conteiner>

    

        </>
    )
}

export default Page;
