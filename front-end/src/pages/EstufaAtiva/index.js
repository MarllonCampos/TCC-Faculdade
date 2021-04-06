import React, { useContext, useEffect, useState, useLayoutEffect } from 'react';
import { Conteiner, ImageHorta, ConteinerGrid, Back } from "./styles"
import Header from '../../components/Header'
import Title from '../../components/Title'
import CardStatus from '../../components/cardDetalhe'
import FotoHorta from '../../assets/horta.jpg'
import { faLightbulb, faFan, faWater, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { useHistory, useLocation, useParams } from 'react-router';
import { UserInfoContext } from '../../contexts/UserInfoContext';

function EstufaAtiva() {
    const { id } = useParams();
    const { elemento, image, titulo } = useLocation();
    const { greenerys } = useContext(UserInfoContext)

    const [estadoElemento, setEstadoElemento] = useState(greenerys.filter(estufa => estufa.idestufa == id).map(item => item.elementos).flat());
    const [estadoImagem, setEstadoImagem] = useState(greenerys.filter(estufa => estufa.idestufa == id).map(item => item.fotoestufa).flat(Infinity));
    const [estadoTitulo, setEstadoTitulo] = useState(greenerys.filter(estufa => estufa.idestufa == id).map(item => item.nomeestufa).flat(Infinity));

    const [filtroLuz, setFiltroLuz] = useState()
    const [filtroAgua, setFiltroAgua] = useState()
    const [filtroVentilador, setFiltroVentilador] = useState()

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    useEffect(() => {
        setFiltroLuz( estadoElemento.filter(el => el.tipoelem == "Luz"))
        setFiltroAgua( estadoElemento.filter(el => el.tipoelem == "Água"))
        setFiltroVentilador( estadoElemento.filter(el => el.tipoelem == "Vento"))

    }, [])


    return (
        <>
            <Header  />
            {filtroLuz && (<Conteiner>
                <Title style={{ marginTop: "50px" }} title={estadoTitulo} />
                <ImageHorta src={estadoImagem} />
                {estadoElemento  ? (<ConteinerGrid>

                    <CardStatus elementos={filtroLuz} cor="purple" tipo="Luz" corIcon="red" iconess={faLightbulb}
                        planta_ou_ativa="ativos" ativos={filtroLuz.filter(el => el.ativo == 1).length} quant={filtroLuz.length} />

                    <CardStatus elementos={filtroVentilador} cor="#ff7518 " tipo="Ventilador" corIcon="red" iconess={faFan} planta_ou_ativa="ativos"
                        ativos={filtroVentilador.filter(el => el.ativo == 1).length} quant={filtroVentilador.length} />

                    <CardStatus elementos={filtroAgua} cor="blue" tipo="Irrigação" corIcon="red" iconess={faWater} planta_ou_ativa="ativos"
                        ativos={filtroAgua.filter(el => el.ativo == 1).length} quant={filtroAgua.length} />

                    <CardStatus lastItem={true} cor="darkgreen" tipo="Plantas" corIcon="red" iconess={faSeedling} planta_ou_ativa="plantas" />

                </ConteinerGrid>): 'LOADING'}
            </Conteiner>)}
        </>
    )

}
export default EstufaAtiva;