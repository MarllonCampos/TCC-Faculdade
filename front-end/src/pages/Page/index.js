import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'


import Header from '../../components/Header'
import InputText from '../../components/Input';
import OlaLogo from '../../components/Ola';
import Select from '../../components/Select'
import Button from '../../components/Button'



import { Conteiner } from '../EstufaAtiva/styles'


import { TituloCima, TituloBaixo } from './styles'

function Page({ title, color, border, ...props }) {
    const [numero, setNumero] = useState(null)
    const [selectState, setSelectState] = useState(false)

    useEffect(() => {
        setNumero([{name:"Norte",status:true},{name:"Sul",status:false},{name:"Leste",status:true},{name:"Oeste",status:false}])

    }, [])

    return (
        <>
            <Conteiner>
              
                <Header icon /> 
                <Link to="/cadastro-estufas">Cadastro Estufas</Link>
               <Link to="/list-estufas">List Estufas</Link>
               <Link to="/login-estufas">Login Estufas</Link>
               <Link to="/uploader-login">Uploader Login </Link>
               {/* <Link 
                className="last" 
                to="/description-card" render={(props) => <DescriptionCard elements={numero} icon="fan" />}
                 >Description Card </Link> */}
                {numero && <Link 
                className="last" 
                to={{
                    pathname: "/description-card",
                    elements:numero,
                    icon: "fan"
                  }}
                 >Description Card </Link>}
               
                <OlaLogo />
                <InputText noIcon idFor="user" labelText="Usuário:" />
                <Select labelText="Usuário: " onChange={setSelectState} label="select" elements={["Marllon Campos", 2, 3, 4, 5, 6, 7, 8, 9]} />
                <InputText idFor="password" labelText="Senha:" />

                <Button>Cadastrar</Button>


            </Conteiner>



        </>
    )
}

export default Page;
