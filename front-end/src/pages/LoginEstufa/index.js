import React, { useState } from 'react';
import { Conteiner, Icon, Label, A } from "./styles"
import Title from '../../components/title/index'
import LoginIcon from '../../components/loginIcon.png'
import Input from '../../components/input/input'
import Button from '../../components/button/Button'


function LoginEstufa() {
    const [login, setLogin] = useState("login")

   function Cadastro(){
       setLogin("cadastro")
       console.log(login)
        }
   function Recuperar(){
       setLogin("recuperar")
        }
        
      
    if (login === "login")
        return (
            <>
                <Conteiner>
                    <Icon src={LoginIcon} />
                    <Title title="Entre com sua conta" />
                    <Label>Usuario:</Label>
                    <Input />
                    <Label>Senha:</Label>
                    <Input />
                    <Button button="Acessar" 
                      />
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
                <Icon src={LoginIcon} />
                <Title title="Faça seu Cadastro" />
                <Label>Usuario:</Label>
                <Input />
                <Label>Senha:</Label>
                <Input />
                <Label>Confirme senha:</Label>
                <Input />
                <Label>Email:</Label>
                <Input />
                <Button button="Acessar" />
               
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
                <Label>Confirme a Senha:</Label>
                <Input />
         
                <Button button="Recuperar"/>
               
            </Conteiner>
            </>
        )
    }
  

}
export default LoginEstufa;