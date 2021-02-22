

import React from 'react'
import './Title.css'

const Title = props => (
    <div className="Title">
        <p className="textoG">Olá, </p>
        <h3>{props.title}</h3>
    </div>
)

export default Title