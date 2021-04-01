import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Back = styled(Link)`
    background-color: var(--quartiary);
    display:flex;
    justify-content:center;
    color: white;
    padding: 20px;
`

export const Conteiner = styled.div`
    background-color: var(--quartiary);
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100%;
`
export const ConteinerGrid =styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 3%;
    width: 80%;
    height: 20%;
    max-width: 600px;
    margin-top: 40px;

    @media (max-width:320px){
        width: 90%;
    }
    

    a {
        color:white;
        text-decoration:none;
        margin-top:12px;
        width:150px;

        &:hover {
            color:navy;
            text-decoration:underline;
            
        }

    }

    .last {
        margin-bottom:50px;
    }    
  
`
export const CardConteiner = styled.div`
    display:flex;
    flex-direction:row;
    max-width:100%;
    justify-content: space-between;
    margin-top:40px;
`

export const ImageHorta = styled.img`
    height: 200px;
    width: 300px;
    border-radius: 15px;
    margin-top: 40px;
`
