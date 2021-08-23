import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowIosBack } from '@styled-icons/evaicons-solid/ArrowIosBack'



import { Conteiner, A } from "./styles"
import Title from '../../components/Title'
import Button from '../../components/Button'
import schema, { loginSchema } from './validation'
import Form from '../../components/Form';
import Main from '../../components/Main';
import InputText from '../../components/Input/';
import Ola from '../../components/Ola'
import Modal from '../../components/Modal'
import axios from 'axios';
import { ErrorMessage } from '../../components/ErrorMessage';


function LoginEstufa() {
    const [err, setErr] = useState([])
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(loginSchema)
    });


    const handleLogin = async ({ name, Senha }) => {
        console.log('enviar para o backend', { email: name, password: Senha })
        const postRequest = await axios.post('https://jsonplaceholder.typicode.com/posts', { email: name, password: Senha })
        // const data = await postRequest.data.json()

        console.log(postRequest);
        return { name, Senha }

    };
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <Main style={{flexDirection:'column'}}>
            <Form onSubmit={handleSubmit(handleLogin)}>

                <Ola />
                <p style={{margin:'20px 0',fontSize:'2rem',textAlign:'center'}} >Entre com sua conta</p>

                <InputText labelText="E-mail" name="email" type="email" noIcon="true" type="text" register={register} />
                {errors.email?.message && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
                

                <InputText labelText="Senha" name="password" type="password" register={register} />
                {errors.password?.message && <ErrorMessage>{errors.password?.message}</ErrorMessage>}

                <Button type="submit" style={{ marginTop: '30px' }}> Enviar</Button>
                <Conteiner>
                    <A to="/cadastro"> {'Me cadastrar :)'} </A>
                    <A to="/recuperar" >Recuperar</A>
                </Conteiner>
            </Form>
        </Main>
    )
}








export default LoginEstufa;