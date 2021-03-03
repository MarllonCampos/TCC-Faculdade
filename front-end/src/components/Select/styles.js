import styled from 'styled-components';
import ArrowDown from '../../assets/arrow-down.svg'
export const Container = styled.div`
    width:80%;
  
    display:flex;
    justify-content:center;
    flex-direction:column;
`;



export const Label = styled.label`
    font-family:Poppins, sans-serif;
    font-weight: 400;
    padding-left:15px;
    color:var(--text);


`;




export const InputContainer = styled.label`
    background:var(--text);
    border-radius:500px;
    padding: 0 17px;
    display:flex;
    align-items:center;
    
    width:100%;
    height:45px;
    position:relative;
    margin-top:12px;

`;



export const Input = styled.select`
    background:transparent;
    appearance:none;
    border:0;
    outline:0;
    width:calc(100% - 15px);
    height:100%;
    font-weight:500;

    color:var(--text-green);

    option {
        
        color:var(--text-green);

    }


`;


export const ArrowIcon = styled.i`
    position:absolute;
    right:15px;
    pointer-events:none;

    width:20px;
    height:100%;

    background:url(${ArrowDown}) no-repeat center;

    transform:${({active}) => console.log(active)};


`
