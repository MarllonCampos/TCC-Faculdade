import React, { useContext, useEffect, useRef, useState } from 'react';

import Header from '../../components/Header'
import InputText from '../../components/Input';
import OlaLogo from '../../components/Ola';
import Select from '../../components/Select'
import Button from '../../components/Button'
import api from '../../utils/api'
import {UserInfoContext} from '../../contexts/UserInfoContext'


import { Conteiner } from '../EstufaAtiva/styles'


import { TituloCima, TituloBaixo, Wrapper, GridContainer, GridItem } from './styles'

function Page({ title, color, border, ...props }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const {userName,setUserName, greenerys, setGreenerys} = useContext(UserInfoContext)


    const handleClickLogin = async () => {
        const response = await api.post('/login', {
            email,
            password
        })
        const data = await response.data;

        if (data.message) {
            return console.log(data.message.content)
        }

        setUserName(data.user)
        setGreenerys(data.greenerys)
        

    }

    return (
        <Conteiner>
            
            <Header icon />
            <Wrapper>

                <OlaLogo />
                <h5 style={{ textAlign: 'center' }}> Resgate sua conta! </h5>
                <GridContainer>
                    <GridItem to="cadastra-elementos">Cadastra Elementos</GridItem>
                    <GridItem to="cadastro-estufas">Cadastro Estufa</GridItem>
                    <GridItem to="estufa-ativa">Estufa Ativa</GridItem>
                    <GridItem to="list-estufas">List Estufas</GridItem>
                    <GridItem to="login-estufas">Login Estufa</GridItem>
                    <GridItem to="cadastro">Cadastro</GridItem>
                    <GridItem to="uploader-login">Login Estufa</GridItem>
                    <GridItem to="recuperar">Login Estufa</GridItem>
                </GridContainer>
                <InputText
                    noIcon
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    labelText="E-mail:"
                />

                <InputText
                    idFor="password"
                    onChange={(e) => setPassword(e.target.value)}
                    labelText="Senha:"
                />


                <Button disabled={email == null || password == null} onClick={handleClickLogin}>Cadastrar</Button>


            </Wrapper>
        </Conteiner>
    )
}

export default Page;
