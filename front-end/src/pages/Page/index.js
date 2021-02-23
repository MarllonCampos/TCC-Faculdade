import React, { useState } from 'react';
import ReactDOM from 'react-dom';



function Page({ title, color, border, ...props }) {
    const [numero, setNumero] = useState(0)

    function aumentar() {
        setNumero(numero + 1)
    }

    function diminuir() {
        setNumero(numero - 1)
    }

    return (
        <>
            <h1>Hello {title} {color} {border} {props.retangulo} {numero} </h1>

            <button onClick={aumentar} >Aumentar</button>

            <button onClick={diminuir}>Diminuir </button>        
        </>
    )
}

export default Page;
