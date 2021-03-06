import styled from 'styled-components';

export const Conteiner = styled.div`
    background-color: green;
    display:flex;
    flex-direction:column;
    align-items:center;
    min-height:calc(100vh - 55px);

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
`

export const ImageHorta = styled.img`
    height: 200px;
    width: 300px;
`
