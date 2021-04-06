import React, { useContext, useEffect } from 'react';
import Card from '../../components/card'
import Header from '../../components/Header'
import { Conteiner } from "./styles"
import { UserInfoContext } from '../../contexts/UserInfoContext'


function ListEstufas() {

    const { userName, greenerys } = useContext(UserInfoContext)
    
    return (
        <>
            <Header icon />
            <Conteiner>
                {greenerys.map(estufa =><Card  title={estufa.nomeestufa}
                    luz={estufa.elementos.filter(elemento => elemento.tipoelem =="Luz" && elemento.ativo != 0).length >0}
                    ventilador={estufa.elementos.filter(elemento => elemento.tipoelem =="Vento" && elemento.ativo != 0).length >0}
                    irrigacao={estufa.elementos.filter(elemento => elemento.tipoelem =="Água" && elemento.ativo != 0).length >0}
                    date={estufa.dataestufa || "00/00/00"}
                    imagem={estufa.fotoestufa}
                    titulo={estufa.nomeestufa}
                    elementos = {estufa.elementos}
                    estufaID={estufa.idestufa}
                />
                )}
            </Conteiner>
        </>
    )

}
export default ListEstufas;
