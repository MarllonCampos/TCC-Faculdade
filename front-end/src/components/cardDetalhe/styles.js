import styled from 'styled-components';



export const Container = styled.div`
    position:relative;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-radius:15px;
    height:100%;
    background:${({cor}) => cor && cor};
    padding:15px 0px 0;
    align-items:center;

    ${(props)=>props.lastItem && "grid-column-end:3"}
`;



export const RowTop = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    padding: 0 10px;
`;


export const Element = styled.p`
    color:var(--text);
    font-size:11px;
    font-weight:600;
    font-family:Comfortaa, sans-serif;
`
export const ActiveElements = styled.p`
    font-weight:700;
    color:var(--text);
    font-size:1rem;
    margin:11px 0 3px;
`
export const Unit = styled.div`
    color:var(--text);
    font-size:0.7rem;
    font-weight:600;
    font-family:Comfortaa, sans-serif;
    align-self:flex-end;
    width: 100%;
    text-align: right;
    padding: 11px 12px 5px;


`