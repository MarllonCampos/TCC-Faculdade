import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Conteiner, A,  } from "./styles"
import Title from '../../components/Title'
import Button from '../../components/Button'
import schema from './validation'
import Form from '../../components/Form';
import Main from '../../components/Main';
import InputText from '../../components/Input/';
import Ola from '../../components/Ola'
import Modal from '../../components/Modal'


function LoginEstufa() {
    const [err, setErr] = useState([])
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    const newUser = (user) => {
        console.log(user)
    };
    const [isModalVisible, setIsModalVisible] = useState(false)
    
        return (
            <Main>               
                <Form onSubmit={handleSubmit(newUser)}>
                 
                       <Ola></Ola>
                        <Title title="Entre com sua conta" />                   
                       
                    <InputText labelText="Nome" name="name"  noIcon= "true" type="text" register={register}></InputText>
                    {errors.name?.message  &&   <Modal 
                    visible={false}
                    titulo="Error"
                    conteudo={errors.name?.message}                   
                    page="/login-estufas"                 
                    ></Modal> }                    
                  
                    <InputText labelText="Senha" name="Senha" type="email" register={register} />
                    {errors.email?.message }                    
                   
                    <Button onClick={newUser}> Enviar</Button>
                    <Conteiner>
                        <A href="/cadastro"> Me cadastrar :) </A>
                        <A href="/recuperar" >Recuperar</A>
                    </Conteiner>
                </Form>
            </Main>
        )
        }

    
       




 
export default LoginEstufa;