import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Conteiner, A, } from "./styles"
import Title from '../../components/Title'
import Button from '../../components/Button'
import schema from './validation'
import Form from '../../components/Form';
import Main from '../../components/Main';
import InputText from '../../components/Input/';
import Ola from '../../components/Ola'

function LoginEstufa() {
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


                    <InputText labelText="Nome" name="name" noIcon="true" type="text" register={register}></InputText>
                    {errors.name?.message}

                    <InputText labelText="Senha" name="Senha" type="password" register={register} />
                    {errors.email?.message}

                    <Button>Enviar</Button>
                    <Conteiner>
                        <A href="/cadastro"> Me cadastrar :) </A>
                        <A href="/recuperar" >Recuperar</A>
                    </Conteiner>
                    </Conteiner>
                </Form>
            </Main>


            )
        }
            export default LoginEstufa;