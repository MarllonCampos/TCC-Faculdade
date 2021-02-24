import React from 'react';

function CadastroEstufas ({title, color, border,...props}){
    const [numero, setNumero]=useState(0)
    
}
function aument(){
    setNumero (numero +1)
}
function dimi (){
    setNumero(numero-1)
}
return {
    <>
    <h1> oii galeraa {title} {color{border} {props.retangulo} {numero} </h1>
<button onClick ={aument}>aumentar</button>
<button onClick ={dimi}>diminuir </button>
</>
)
}
export default page;
    
