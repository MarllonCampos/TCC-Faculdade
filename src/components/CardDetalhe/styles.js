import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const Container = styled(Link)`
    position:relative;
    display:flex;
    
    align-items:center;
    border-radius:10px;
    background:${({cor}) => cor && cor};
    padding:10px 8px; 
    padding-left:12px;
    width: min(80vw,300px);
    text-decoration:none;
    color:var(--text);
    align-items:center;
    margin-top:15px;
 

`;



export const LeftMessage = styled.div`
    display:flex;
    align-items:center;

    flex:1;
`;


export const Element = styled.p`
    color:var(--text);
    font-size:11px;
    font-weight:600;
    font-family:Comfortaa, sans-serif;
    line-height:0;
    margin-left:5px;
`

export const Unit = styled.span`
    color:var(--text);
    font-size:0.7rem;
    font-weight:600;
    font-family:Comfortaa, sans-serif;
    text-decoration:underline;

`