import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Conteiner = styled.div`
  background-color: var(--quartiary);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 55px);
  .wrapper-title { 
    display:flex;
    width:min(80vw,300px);
    justify-content:space-between;
    align-items:center;
    padding:0 5px;
    margin-top:12px;

    margin-bottom:16px;
    h3 {
      margin:0;
    }

    input {
      border:0;
      caret-color:#000;
      background:none;
      outline:1px solid #000;
      height:25px;
      border-radius:6px;
      padding:0 12px;
      font-family:Roboto, sans-serif;
      font-weight:500;
      font-size:12px;
    }
    &> div {
      display:flex;
      gap:12px;
    }
  }
  .estufa-nome {
    margin: 0;
    margin-bottom: 16px;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text);
    text-align: center;
    font-family: Poppins,sans-serif;
    outline:0;
    background:transparent;
    max-width:min(80vw,300px);
    border:0;
    caret-color:#000;

  }
  
  p.date {
      font-family: Roboto, sans-serif;
      margin-top:15px;
      color:var(--text);
      font-weight: bold;
      font-size:1.23rem;
  }

  .temperature-humidity {
    background-color:#800080;
    width:min(300px, 80vw);
    border-radius:var(--radius);
    padding: 11px 8px;
    margin-top:15px;
    color:var(--text);
    font-family: Poppins, sans-serif;
    font-weight: 400;
    span+span {
      float:right;
    }
   
    p + p {
      margin-top:12px;
    }
  }


`



export const ImageHorta = styled.img`
  height: 200px;
  width: min(80vw,300px);
  border-radius: 15px;
  object-fit:cover ;
`
