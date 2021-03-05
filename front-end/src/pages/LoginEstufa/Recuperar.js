import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Conteiner, Icon, Label, A, Bnt } from "./styles"
import Title from '../../components/Title'
import LoginIcon from '../../assets/loginIcon.png'
import Button from '../../components/Button'
import schema from './validation'
import Form from '../../components/Form';
import Field from '../../components/Field';
import Main from '../../components/Main';
import Ola from '../../components/Ola'
import InputText from '../../components/Input'
function Recuperar() {
    

   
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    const newUser = (user) => {
        console.log(user)
    };
return (
    <Main>
        <Form onSubmit={handleSubmit(newUser)}>
            <Conteiner>
                <Ola></Ola>
                <Title title="Entre com sua conta" />
            </Conteiner>
            <InputText labelText="Senha" name="name" type="text" register={register} />
            {errors.name?.message}
            <InputText labelText="Recuperar senha" name="email" type="email" register={register} />
            {errors.email?.message}
            <Button><A href="/login-estufas">Cadastrar</A></Button>
            <Conteiner>
             
            </Conteiner>
        </Form>
    </Main>
)
}
export default Recuperar


