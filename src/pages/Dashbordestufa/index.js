import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Conteiner, Title1,Image,TextData } from "./styles"
import foto from '../../assets/horta.jpg'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Header from '../../components/Header'
import Form from '../../components/Form';






function Dashbordestufa() {

    


    return (
        <>
            <Form  >

                <Header icon />
                <Conteiner>
                <Title1> Estufa </Title1>
               <Image src={foto} />
               
            
                </Conteiner>
            </Form>
        </>

    )

}
export default Dashbordestufa;
