import React from 'react'
import {Link} from 'react-router-dom'
import whiteButton from '../../assets/botao-mais-branco.svg'
import greenButton from '../../assets/botao-mais-verde.svg'

export function BotaoMais({color="white",to,...props}) {

  const choosedImg = color == "white" ? whiteButton : greenButton 
  return (
    <Link to={to} style={{...props.style}}>
      <img 
        {...props}
        style={{
            width:42,
            height:42,
            objectFit:'cover', 
            display:'block',
           
        }} 
        src={choosedImg} 
        alt="Um botão que te leva para a criação do componente onde você esta"
      />
    </Link>
  )
}