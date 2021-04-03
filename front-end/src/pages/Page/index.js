import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'


import Header from '../../components/Header'
import InputText from '../../components/Input';
import OlaLogo from '../../components/Ola';
import Select from '../../components/Select'
import Button from '../../components/Button'
import api from '../../utils/api'
import { UserInfoContext } from '../../contexts/UserInfoContext'



import { Conteiner } from '../EstufaAtiva/styles'


import { TituloCima, TituloBaixo, Wrapper, GridContainer, GridItem } from './styles'

function Page({ title, color, border, ...props }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [numero, setNumero] = useState(null)
    const [selectState, setSelectState] = useState(false)
    const { userName, setUserName, greenerys, setGreenerys,imagem, setImagem } = useContext(UserInfoContext)



    
    useEffect(() => {
        setNumero([{ name: "Norte", status: true }, { name: "Sul", status: false }, { name: "Leste", status: true }, { name: "Oeste", status: false }])
        console.log(imagem)
    }, [])



    const handleClickLogin = async () => {
        if (email == null || password == null) return console.log('Precisa de password')
        console.log('Tentando Realizar o Login')
        const response = await api.post('/login', {
            email,
            password
        })
        const data = await response.data;




        if (data.message) {
            return console.log(data.message.content)
        }

        console.log(`Ola ${data.user} logado com sucesso`)

        setUserName(data.user)
        setGreenerys(data.greenerys)


    }

    return (
        <Conteiner>

            <Header icon />
            <Wrapper>

                <OlaLogo />
                <h5 style={{ textAlign: 'center' }}> Resgate sua conta! </h5>
                {userName &&  (<GridContainer>
                    <GridItem to="cadastra-elementos">Cadastra Elementos</GridItem>
                    <GridItem to="cadastro-estufas">Cadastro Estufa</GridItem>
                    <GridItem to="estufa-ativa">Estufa Ativa</GridItem>
                    <GridItem to="list-estufas">List Estufas</GridItem>
                    <GridItem to="login-estufas">Login Estufa</GridItem>
                    <GridItem to="cadastro">Cadastro</GridItem>
                    <GridItem to="uploader-login">Login Estufa</GridItem>
                    <GridItem to="recuperar">Login Estufa</GridItem>
                    {numero && <Link
                        className="last"
                        to={{
                            pathname: "/description-card",
                            elements: numero,
                            icon: "fan"
                        }}
                    >Description Card </Link>}
                </GridContainer>) }
              
                <InputText
                    noIcon
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    labelText="E-mail:"
                    required
                />

                <InputText
                    idFor="password"
                    onChange={(e) => setPassword(e.target.value)}
                    labelText="Senha:"
                />


                <Button disabled={email.length === 0 || password.length === 0} onClick={handleClickLogin}>Cadastrar</Button>


            </Wrapper>
        </Conteiner>
    )
}

export default Page;
