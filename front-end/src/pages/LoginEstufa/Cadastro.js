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
function Cadastro() {
    const [login, setLogin] = useState("login")

   
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
            <InputText labelText="Nome" noIcon= "true" name="name" type="text" register={register} />
            {errors.name?.message}
            <InputText labelText="Senha"  name="Senha" type="text" register={register} />
            {errors.name?.message}
            <InputText labelText="Confirma senha" name="Confirma" type="text" register={register} />
            {errors.name?.message}
            <InputText labelText="Email" noIcon= "true"  name="email" type="email" register={register} />
            {errors.email?.message}
     <Button><A href="/uploader-login">Cadastrar</A></Button>
           
        </Form>
    </Main>
)
}
export default Cadastro