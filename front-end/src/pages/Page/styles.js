import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const TituloCima = styled.h1`
    color:green;
    font-size:20px;
`


export const TituloBaixo = styled.p`
    color:red;
    


`


export const Wrapper = styled.div`
    flex:1;
    background-color: green;
    width:100%;
`

export const GridContainer = styled.div`
    width:80vw;
    display:grid;
    grid-template-columns:auto;
    margin:23px auto;
    justify-items:center;
    grid-gap:35px;

`;
export const GridItem = styled(Link)`
    color:white;
    background-color:rgba(6,71,17,56%);
    text-align:center;
    width:100%;
    height:35px;
    line-height:35px;
    border-radius:7px;



    &:hover {
        background-color:rgba(6,71,17,86%);

    }

`



