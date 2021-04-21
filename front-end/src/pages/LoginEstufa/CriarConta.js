import React,{ useState } from 'react';
import { Conteiner, Icon, Label, A } from "./styles"
import Title from '../../components/title/index'
import LoginIcon from '../../components/loginIcon.png'
import Input from '../../components/input/input'
import Button from '../../components/button/Button'


function CriarConta(props) {
    const [login, setLogin] = useState(1)
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
                <Button button="Acessar"  onClick={() => setLogin(1)}/>
               
            </Conteiner>
        </>
    )

}
export default CriarConta;