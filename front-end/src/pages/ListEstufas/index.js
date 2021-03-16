import React from 'react';
import Card from '../../components/card'
import Header from '../../components/Header'
import { Conteiner } from "./styles"
function ListEstufas() {
    return (
        <>
        <Header icon />
        <Conteiner>
            <Card title="Estufa Jão" status={true} date="03/03/2021"/>
            <Card title="Estufa Marllon" status={false} date="06/03/2021"/>  
            <Card title="Estufa Ruty" status={true} date="09/03/2021"/>  
            <Card title="Estufa Rafa" status={false} date="15/03/2021"/>  
            <Card title="Estufa Weza" status={true} date="16/03/2021"/>  
        </Conteiner>
        </>
    )
    
}
export default ListEstufas;