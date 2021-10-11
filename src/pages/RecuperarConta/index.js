import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Form from '../../components/Form'
import Header from '../../components/Header'
import Input from '../../components/Input'

export function RecuperarConta(){
  const [email,setEmail] = useState('')

  function handleSubmit(event){
    event.preventDefault()

    console.log(email)
  }

  return (
    <>
    <Header noIcon />
    <Container>
      <div className="title-container">
        <p>Digite seu e-mail e enviaremos o código de recuperação para a sua conta</p>
      </div>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Input 
          noIcon
          idFor="Email"
          placeholder="Digite o seu email"
          type="email"
          required={true}
          labelText="Email: "
          onChange={((ev) => setEmail(ev.target.value))}
        />



        <Button type="submit" disabled={!email || email.length < 5} > 
            Recuperar
        </Button>
      </Form>

    </Container>
  </>
  )
}


const Container = styled.div`
  background-color:var(--quintiary);
  display: flex;
  flex-direction: column;
  align-items: center;
  height:calc(100% - 55px);

  form {
    padding-top:15%;
    display:flex;
    flex-direction:column;
    height:100%;
    button {
      margin-top:24px;
      align-self:flex-end;
    }
  }
  .title-container {
    font-size:18px;
    color:var(--text);
    font-family:Roboto,sans-serif;
    font-weight:600;
    padding:16px 24px;
    text-align:center;
  }
`;