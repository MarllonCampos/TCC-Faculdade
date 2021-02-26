import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:55px;
    background-color:blue;
`;

export const ContentWrapper = styled.div`
    margin:0 auto;
    height:100%;
    max-width:800px;
    display:flex;
    align-items:center;
    background:greenyellow;
    position:relative;


`;


export const IconBusca = styled.div`
    width:45px;
    height:45px;
    margin-left:12px;
    background:purple;
    display:${({icon, ...props}) => icon ? 'none':'inline'};

`;


export const InputContainer = styled.div`
    height:80%;
    width:245px;
    border-radius:15px;
    display:flex;
    align-items:center;
    margin-left:12px;
    position:relative;
    background:white;

`;

export const Input = styled.input`
    height:100%;
    width:85%;
    border-radius:15px;
    padding-left:15px;

    outline:0;
    border:0;
    background-color:transparent;
`;

export const CloseIcon = styled.div`
    width:20px;
    height:20px;
    background-color:yellow;
    position:absolute;
    right:12px;


`;




export const Sidemenu = styled.div`
    width:45px;
    height:45px;
    background-color:green;
    position:absolute;
    right:5px;


`;



