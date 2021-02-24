import React, { useState } from 'react';

import Header from '../../components/Header'


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
            <Header />
            <TituloCima>João</TituloCima>
            <TituloBaixo>Teste</TituloBaixo>

        </>
    )
}

export default Page;
