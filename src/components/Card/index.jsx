import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFan, faWater } from '@fortawesome/free-solid-svg-icons'
import FotoHorta from '../../assets/horta.jpg'

import { Conteiner, Image, Coluna, Luz, Vento, Agua, OnOff, TextData, TextoStatus } from "./styles"

function Card({ title, luz, ventilador, irrigacao, date, elementos,imagem,estufaID ,...rest }) {


    function SubtraiDatas() {
        const data = new Date();
        const dataCriacao = new Date(date)
        console.log(dataCriacao)
        const diferencaDatas = Math.abs(data.getTime() - dataCriacao.getTime());
        const dataCriacaoFinal = Math.ceil(diferencaDatas / ( 1000 *  60 * 60 * 24));

        return dataCriacaoFinal
      }

    return (
        <Conteiner to={{
            pathname: `estufa-ativa/${estufaID}`,
            elemento: elementos,
            image: imagem,
            titulo: title,
            }}>
            <Image src={FotoHorta} />
            <Coluna>
                <TextoStatus>
                    {title}
                </TextoStatus>
                <div>
                {luz && (<Luz>
                    <FontAwesomeIcon style={{ color: "#11f024" }} icon={faLightbulb} />
                    <OnOff status={luz}>
                        {luz == true ? "Ativo" : "Desativado"}
                    </OnOff>
                </Luz>)}
                {ventilador && (<Vento>
                    <FontAwesomeIcon style={{ color: "#ffff00" }} icon={faFan} />
                    <OnOff status={ventilador}>
                        {ventilador ? "Ativo" : "Desativado"}
                    </OnOff>
                </Vento>)}
                {irrigacao && (<Agua>
                    <FontAwesomeIcon style={{ color: "#0000ff" }} icon={faWater} />
                    <OnOff status={irrigacao}>
                        {irrigacao ? "Ativo" : "Desativado"}
                    </OnOff>
                </Agua>)}
                </div>
                <TextData>
                    {/lista-estufas/.test(window.location.href) ?
                    `Criado em: ${date}`
                    :
                       `Tempo de vida: ${SubtraiDatas()} Dias`
                    }
                </TextData>
            </Coluna>
        </Conteiner>
    )
}


export default Card