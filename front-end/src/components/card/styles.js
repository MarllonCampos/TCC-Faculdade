import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFan, faWater } from '@fortawesome/free-solid-svg-icons'

export const Conteiner = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
    width: 300px;
    height: 200px;
    margin-top: 20px;
`

export const Image = styled.img`
    width: 150px;
    height:200px;
`

export const Coluna = styled.div`
    display: flex;
    flex-direction: column;
`

export const Luz = styled.div`
    display: flex;
    height: 30px;
    flex-direction: row;
    justify-content:space-evenly;
`

export const Vento = styled.div`
    display: flex;
    height: 30px;
    flex-direction: row;
    justify-content:space-evenly;
`

export const Agua = styled.div`
    display: flex;
    height: 30px;
    flex-direction: row;
    justify-content:space-evenly;
`

export const OnOff = styled.p`
    background-color: ${({status})=> status == true ? "green":"red"};
    height: 20px;
    width: 100px;
    border-radius: 8px;
    text-align: center;
    color: ${({status})=> status == true ? "white":"black"} ;
`

export const TextData = styled.p`
    color: rgb(13, 139, 41);
    font-size: 14px;
    font-weight: bolder;
    margin-left: 10px;
    margin-top: 10px;
`

export const TextoStatus = styled.p`
    font-weight: bolder;
    color: rgb(0, 5, 0);
    font-size: x-large;
    text-align: center;
    padding: 10px;
`
