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
            <Card title="Estufa Marllon" status={false} date="03/03/2021"/>  
        </Conteiner>
        </>
    )
    
}
export default ListEstufas;