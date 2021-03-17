import React from 'react';
import Card from '../../components/card'
import Header from '../../components/Header'
import { Conteiner } from "./styles"
function ListEstufas() {
    return (
        <>
        <Header icon />
        <Conteiner>
            <Card title="Estufa Jão" luz={true} ventilador={false} irrigacao={true} date="03/03/2021"/>
            <Card title="Estufa Marllon" luz={true} ventilador={false} irrigacao={false} date="03/03/2021"/>
            <Card title="Estufa Ruty" luz={false} ventilador={false} irrigacao={true} date="03/03/2021"/>
            <Card title="Estufa Rafa" luz={true} ventilador={false} irrigacao={true} date="03/03/2021"/>
            <Card title="Estufa Weza" luz={true} ventilador={false} irrigacao={true} date="03/03/2021"/>
        </Conteiner>
        </>
    )
    
}
export default ListEstufas;