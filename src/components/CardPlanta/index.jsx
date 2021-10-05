import React from 'react'

import { Conteiner, Image, Coluna, TextData, TextoStatus } from "./styles"

function CardPlanta({ title, luz, ventilador, irrigacao, date, elementos,imagem,estufaID ,...rest }) {


    function SubtraiDatas() {
        const data = new Date();
        const dataCriacao = new Date(date)
        const diferencaDatas = Math.abs(data.getTime() - dataCriacao.getTime());
        const dataCriacaoFinal = Math.ceil(diferencaDatas / ( 1000 *  60 * 60 * 24));

        return dataCriacaoFinal
      }

    return (
        <Conteiner onClick={rest.onClick && rest.onClick}>
            
            <Image src={imagem} />
            <Coluna>
                <TextoStatus>
                    {title}
                </TextoStatus>
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


export default CardPlanta