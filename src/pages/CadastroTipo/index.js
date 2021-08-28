import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Conteiner, Title1, } from "./styles"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Header from '../../components/Header'
import Form from '../../components/Form';
import Ola from '../../components/Ola'
import InputText from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';



function CadastroTipo() {

    const schema = yup.object().shape({
        nomeestufa: yup.string().min(2, "Digite um nome para Estufa").required(),
    });
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    const newUser = (user) => {
        console.log(user);
    };



    return (
        <>
            <Form onSubmit={handleSubmit(newUser)} >

                <Header icon />
                <Conteiner>
                    <Ola />
                    <Title1>Cadastro de Estufas </Title1>

                    <InputText noIcon idFor="user"
                        placeholder="Digite o nome da Estufa"
                        name="nomeestufa"
                        type="text"
                        labelText="Nome da Estufa:"
                        register={register} />
                    {errors.nomeestufa?.message && <Modal
                        style={{ marginTop: "25px" }}
                        visible={false}
                        titulo="Error"
                        conteudo={errors.nomeestufa?.message}
                        page="/login-estufas"
                    ></Modal>}
                    <Button style={{ marginTop: "25px" }} >Cadastrar</Button>

                </Conteiner>
            </Form>
        </>

    )

}
export default CadastroTipo;
