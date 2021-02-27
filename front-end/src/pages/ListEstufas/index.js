import React from 'react';
import Card from '../../components/card'
import Header from '../../components/Header'
import { Conteiner } from "./styles"
function ListEstufas() {
    return (
        <>
        <Header/>
        <Conteiner>
            <Card nome="Estufa Jão" data="23/03/2021"/> 
        </Conteiner>
        </>
    )
    
}
export default ListEstufas;