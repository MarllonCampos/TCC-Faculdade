import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Conteiner, Icon, A,  } from "./styles"
import Title from '../../components/Title'
import LoginIcon from '../../assets/loginIcon.png'
import Button from '../../components/Button'
import schema from './validation'
import Form from '../../components/Form';
import Field from '../../components/Field';
import Main from '../../components/Main';
import inputText from '../../components/Input/'
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
                    </Conteiner>

                    <InputText labelText="Nome" name="name" type="text" register={register}></InputText>
                    {errors.name?.message}
                  
                    <InputText labelText="Email" name="email" type="email" register={register} />
                    {errors.email?.message}
                   
                    <Button>Enviar</Button>
                    <Conteiner>
                        <A href="/cadastro"> Me cadastrar :) </A>
                        <A href="/recuperar" >Recuperar</A>
                    </Conteiner>
                </Form>
            </Main>
        )
        }

    
       




 
export default LoginEstufa;