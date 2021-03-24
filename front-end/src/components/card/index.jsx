import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFan, faWater } from '@fortawesome/free-solid-svg-icons'
import FotoHorta from '../../assets/horta.jpg'

import { Conteiner, Image, Coluna, Luz, Vento, Agua, OnOff, TextData, TextoStatus } from "./styles"

function Card({ title, luz, ventilador, irrigacao, date, ...rest }) {
    return (
        <Conteiner to="estufa-ativa">
            <Image src={FotoHorta} />
            <Coluna>
                <TextoStatus>
                    {title}
                </TextoStatus>
                <div>
                <Luz>
                    <FontAwesomeIcon style={{ color: "#11f024" }} icon={faLightbulb} />
                    <OnOff status={luz}>
                        {luz == true ? "Ativo" : "Desativado"}
                    </OnOff>
                </Luz>
                <Vento>
                    <FontAwesomeIcon style={{ color: "#ffff00" }} icon={faFan} />
                    <OnOff status={ventilador}>
                        {ventilador ? "Ativo" : "Desativado"}
                    </OnOff>
                </Vento>
                <Agua>
                    <FontAwesomeIcon style={{ color: "#0000ff" }} icon={faWater} />
                    <OnOff status={irrigacao}>
                        {irrigacao ? "Ativo" : "Desativado"}
                    </OnOff>
                </Agua>
                </div>
                <TextData>
                    Criado em: {date}
                </TextData>
            </Coluna>
        </Conteiner>
    )
}


export default Card