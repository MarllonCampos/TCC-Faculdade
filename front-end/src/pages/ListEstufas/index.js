import React, { useContext, useEffect} from 'react';
import Card from '../../components/card'
import Header from '../../components/Header'
import { Conteiner } from "./styles"
import { UserInfoContext } from '../../contexts/UserInfoContext'
import SearchInput from './SearchInuput';


function ListEstufas() {
    
    const { userName, greenerys } = useContext(UserInfoContext)

    function pesquisar() {
        greenerys.filter(estufa => estufa.nomeestufa == ""
        .map(estufa => <Card
        title={estufa.nomeestufa}
        luz={estufa.elementos.filter(elemento => elemento.tipoelem =="Luz" && elemento.ativo != 0).length >0}
        ventilador={estufa.elementos.filter(elemento => elemento.tipoelem =="Vento" && elemento.ativo != 0).length >0}
        irrigacao={estufa.elementos.filter(elemento => elemento.tipoelem =="Água" && elemento.ativo != 0).length >0}
        date={estufa.dataestufa || "00/00/00"}
        imagem={estufa.fotoestufa}
        titulo={estufa.nomeestufa}
        elementos = {estufa.elementos}
        />)    
        )
    }

    useEffect(() => {
        console.log(userName, greenerys)
    }, [])
    
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
                />
                )}
            </Conteiner>
        </>
    )

}
export default ListEstufas;
