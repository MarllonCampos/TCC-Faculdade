import React, { useContext, useEffect } from 'react';
import Card from '../../components/card'
import Header from '../../components/Header'
import { Conteiner } from "./styles"
import {UserInfoContext} from '../../contexts/UserInfoContext'


function ListEstufas() {

    const {userName,greenerys} = useContext(UserInfoContext)

    useEffect(() => {
        console.log(userName,greenerys)
    },[])
    
    var MostrarMap = Greenery.map(function(item){item.vetor.map(function(item){item.X}}

    return (
        <>
        <Header icon />
        <Conteiner>
            <Card MostrarMap/>
            <Card title="Estufa Marllon" luz={true} ventilador={false} irrigacao={false} date="03/03/2021"/>
            <Card title="Estufa Ruty" luz={false} ventilador={false} irrigacao={true} date="03/03/2021"/>
            <Card title="Estufa Rafa" luz={true} ventilador={false} irrigacao={true} date="03/03/2021"/>
            <Card title="Estufa Weza" luz={true} ventilador={false} irrigacao={true} date="03/03/2021"/>
        </Conteiner>
        </>
    )
    
}
export default ListEstufas;
