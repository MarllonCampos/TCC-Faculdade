import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Conteiner, Icon, Label, A, Bnt } from "./styles"
import Title from '../../components/Title'
import LoginIcon from '../../assets/loginIcon.png'
import Input from '../../components/input/input'
import Button from '../../components/Button'
import schema from './validation'
import Form from '../../components/Form';
import Field from '../../components/Field';
import Main from '../../components/Main';


function LoginEstufa() {
    const [login, setLogin] = useState("login")

    function Cadastro() {
        setLogin("cadastro")

    }
    function Recuperar() {
        setLogin("recuperar")
    }
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    const newUser = (user) => {
        console.log(user)
    };
    if (login === "login")
        return (
            <Main>
                <Form onSubmit={handleSubmit(newUser)}>
                    <Conteiner>
                        <Icon src={LoginIcon} />
                        <Title title="Entre com sua conta" />
                    </Conteiner>
                    <Field.Text label="Nome" name="name" type="text" register={register} />
                    {errors.name?.message}
                    <Field.Text label="Email" name="email" type="email" register={register} />
                    {errors.email?.message}
                    <Button>Enviar</Button>
                    <Conteiner>
                        <A onClick={() => setLogin(Cadastro)}> Me cadastra :) </A>
                        <A onClick={() => setLogin(Recuperar)}>Recuperar</A>
                    </Conteiner>
                </Form>
            </Main>
        )
    if (login === "cadastro") {
        return (
            <Main>
                <Form onSubmit={handleSubmit(newUser)}>
                    <Conteiner>
                        <Icon src={LoginIcon} />
                        <Title title="Entre com sua conta" />
                    </Conteiner>
                    <Field.Text label="Nome" name="name" type="text" register={register} />
                    {errors.name?.message}
                    <Field.Text label="Senha" name="Senha" type="text" register={register} />
                    {errors.name?.message}
                    <Field.Text label="Confirma senha" name="Confirma" type="text" register={register} />
                    {errors.name?.message}
                    <Field.Text label="Email" name="email" type="email" register={register} />
                    {errors.email?.message}
                    <A href="/uploader-login"><Button>Enviar</Button></A>
                   
                </Form>
            </Main>
        )
    }

    if (login === "recuperar") {
        return (
            <Main>
                <Form onSubmit={handleSubmit(newUser)}>
                    <Conteiner>
                        <Icon src={LoginIcon} />
                        <Title title="Entre com sua conta" />
                    </Conteiner>
                    <Field.Text label="Senha" name="name" type="text" register={register} />
                    {errors.name?.message}
                    <Field.Text label="Recuperar senha" name="email" type="email" register={register} />
                    {errors.email?.message}
                    <Button>Enviar</Button>
                    <Conteiner>
                     
                    </Conteiner>
                </Form>
            </Main>
        )
    }







    {/*
    const [login, setLogin] = useState("login")
    const [usuario, setUsuario] = useState("Rafael ")
    const [senha, setSenha] = useState(" ")
  
    
   
   
    
    

    function Cadastro() {
        setLogin("cadastro")
       
    }
    function Recuperar() {
        setLogin("recuperar")
    }


    if (login === "login")
        return (
            <>
           
                <Conteiner>
                    <Icon src={LoginIcon} />
                    <Title title="Entre com sua conta" />
                    <Label>Usuario:</Label>
                    <Input type="text" placeholder="Nome" onChange={e => setUsuario={value}}/>
                    <Label>Senha:</Label>
                    <Input type="text" placeholder="Senha" onChange={e => setSenha=(e.target.value)}/>
                    <Bnt onClick={submitValue }
                    >Acessar</Bnt>
                    <A
                        onClick={() => setLogin(Cadastro)}>
                        Me cadastra :)
                </A>

                    <A onClick={() => setLogin(Recuperar)}

                    >
                        Recuperar
                </A>

                </Conteiner>
            </>
        )
    if (login === "cadastro") {
        return (
            <>
                <Conteiner>
                    <p>{usuario}</p>
                    <Icon src={LoginIcon} />
                    <Title title="Faça seu Cadastro" />
                    <Label>Usuario:</Label>
                    <Input />
                    <Label>Senha:</Label>
                    <Input />
                    <Label style={{marginLeft: "55px"}} >Confirme senha:</Label>
                    <Input />
                    <Label>Email:</Label>
                    <Input />
                    <A href="/uploader-login"> <Bnt
                    >Cadastra</Bnt></A>
                </Conteiner>
            </>
        )
    }
    if (login === "recuperar") {
        return (
            <>
                <Conteiner>
                    <Icon src={LoginIcon} />
                    <Title title="Recuperar Senha" />
                    <Label>Senha:</Label>
                    <Input />
                    <Label style={{marginLeft: "55px"}}>Confirme a Senha:</Label>
                    <Input />

                    <Bnt onClick={() => setLogin("login")}
                    >Recuperar</Bnt>

                </Conteiner>
            </>
        )
    }*/}


}
export default LoginEstufa;