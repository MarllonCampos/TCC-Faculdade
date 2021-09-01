import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFan, faWater } from '@fortawesome/free-solid-svg-icons'
import FotoHorta from '../../assets/horta.jpg'

import { Conteiner, Image, Coluna, Luz, Vento, Agua, OnOff, TextData, Titulo } from "./styles"
import useLongPress from '../../utils/useLongPress'

function Card({ onClick,title, luz, ventilador, irrigacao, date, elementos,imagem,estufaID ,...rest }) {
    const [dataDiff,setDataDiff]= useState('')
    function cliqueLongo(){
        console.log("clique longo")
    }
    function cliqueCurto(){
        console.log('clque curto')
    }
     const configCliqueLongo = {
        PreventDefault: true,
        delay: 1500
        
     }
    const eventoCliqueLongo = useLongPress(cliqueLongo, cliqueCurto, configCliqueLongo)

    useEffect(()=>{
        SubtraiDatas()
    },[date])

    function SubtraiDatas() {
        const data = new Date();
        const dataCriacao = new Date(date)
        console.log(dataCriacao)
        const diferencaDatas = Math.abs(data.getTime() - dataCriacao.getTime());
        const dataCriacaoFinal = Math.ceil(diferencaDatas / ( 1000 *  60 * 60 * 24));

        setDataDiff(dataCriacaoFinal)
    }


    return (
        <Conteiner {...rest}
        {...eventoCliqueLongo}
        

        >
            <Image src={FotoHorta} />
            <Coluna>
                <Titulo>
                    {title}
                </Titulo>
                <div>
                {irrigacao && (<Agua>
                    <FontAwesomeIcon style={{ color: "#0000ff" }} icon={faWater} />
                    <OnOff status={irrigacao}>
                        {irrigacao ? "Ativo" : "Desativado"}
                    </OnOff>
                </Agua>)}
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
                </div>
                <TextData>
                    {/lista-estufas/.test(window.location.href) ?
                    `Criado em: ${date}`
                    :
                       `Tempo de vida: ${dataDiff} Dias`
                    }
                </TextData>
            </Coluna>
        </Conteiner>
    )
}


export default Card