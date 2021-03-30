import React, { useContext, useEffect } from 'react';
import Card from '../../components/card'
import Header from '../../components/Header'
import { Conteiner } from "./styles"
import { UserInfoContext } from '../../contexts/UserInfoContext'


function ListEstufas() {

    const { userName, greenerys } = useContext(UserInfoContext)

    useEffect(() => {
        console.log(userName, greenerys)
    }, [])

    const estufas = [
        { title: 'Estufa João', luz: true, ventilador: false, irrigacao: true, date: '30/03/2021' },
        { title: 'Estufa Marllon', luz: true, ventilador: false, irrigacao: true, date: '30/03/2021' },
        { title: 'Estufa Ruty', luz: true, ventilador: false, irrigacao: true, date: '30/03/2021' },
        { title: 'Estufa Rafa', luz: true, ventilador: false, irrigacao: true, date: '30/03/2021' },
        { title: 'Estufa Weza', luz: true, ventilador: false, irrigacao: true, date: '30/03/2021' }
    ]
    
    return (
        <>
            <Header icon />
            <Conteiner>
                {estufas.map(estufa =><Card  title={estufa.title}
                    luz={estufa.luz}
                    ventilador={estufa.ventilador}
                    irrigacao={estufa.irrigacao}
                    date={estufa.date}>
                </Card>)}
            </Conteiner>
        </>
    )

}
export default ListEstufas;
