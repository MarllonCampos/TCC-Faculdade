import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';
import { ArrowIosBack } from '@styled-icons/evaicons-solid/ArrowIosBack'


import { A, } from "./styles"
import Title from '../../components/Title'
import Button from '../../components/Button'
import schema, { createUserSchema } from './validation'
import Form from '../../components/Form';
import Main from '../../components/Main';
import Ola from '../../components/Ola'
import InputText from '../../components/Input'
import OlaLogo from '../../components/Ola';
import { ErrorMessage } from '../../components/ErrorMessage';
import { api } from '../../utils/api';
import axios from 'axios';

function Cadastro() {
    const history = useHistory();
    const [login, setLogin] = useState("login")


    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(createUserSchema)
    });
    const handleCreateUser = async (user) => {
        const {confirm,email,name,password} = user
        console.log({email,name,password})
        const data = await axios.post('https://jsonplaceholder.typicode.com/posts/',{email,name,password})
        console.log(await data.data)
    };

    return (
        <Main style={{ flexDirection: 'column' }}>
            <ArrowIosBack style={{ position: 'absolute', top: '30px', left: '15px' }} size={38} onClick={history.goBack} />
            <OlaLogo text="" />
            <p style={{ fontSize: '2rem', margin: '20px 0', color: 'var(--text)' }}>Crie sua conta</p>
            <Form onSubmit={handleSubmit(handleCreateUser)}>

                <InputText labelText="Nome" noIcon="true" name="name" type="text" register={register} />
                {errors.name?.message && <ErrorMessage>{errors.name?.message}</ErrorMessage>}

                <InputText labelText="Senha" name="password" type="text" register={register} />
                {errors.password?.message && <ErrorMessage>{errors.password?.message}</ErrorMessage>}

                <InputText labelText="Confirmar senha" name="confirm" type="text" register={register} />
                {errors.confirm?.message && <ErrorMessage>{errors.confirm?.message}</ErrorMessage>}

                <InputText labelText="Email" noIcon="true" name="email" type="email" register={register} />
                {errors.email?.message && <ErrorMessage>{errors.email?.message}</ErrorMessage>}

                <Button type="submit" style={{ marginTop: '30px' }}>Cadastrar</Button>

            </Form>
        </Main>
    )
}
export default Cadastro