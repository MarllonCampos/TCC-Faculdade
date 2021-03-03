import React, { useState } from 'react';

import Header from '../../components/Header'
import InputText from '../../components/input';
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
            <InputText noIcon idFor="user" labelText="Usuário:"/>
            <InputText idFor="password" labelText="Senha:"/>


            </Conteiner>

    

        </>
    )
}

export default Page;
