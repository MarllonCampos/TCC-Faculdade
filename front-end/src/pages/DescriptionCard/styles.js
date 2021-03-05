import styled from 'styled-components';
import LightIcon from '../../assets/light.svg'
import FanIcon from '../../assets/fan.svg'
import SprinkeIcon from '../../assets/sprinkle.svg'

const icons = {
    "light":LightIcon,
    "sprinkle":FanIcon,
    "fan":SprinkeIcon

}

export const Container = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;  
    background-color:var(--secondary);
`;


export const WrapperIcon = styled.div`
    display:flex;
    flex-direction:column;  
    align-items:center;
    margin:12px auto;


    p {
        margin:15px 0;
        text-align:center;
        font-size:28px;
    }
`;




export const Icon = styled.div`
    width:100%;
    max-width:105px;
    height:105px;
    background:url(${({icon}) => icons[icon]}) no-repeat center center;
    background-size:contain;

`;




export const Element = styled.div`
    position:relative;
    width: 90%;
    padding:0 15px;
    display:flex;
    align-items:center;
    margin:0 auto;
    max-width:550px;
    height:45px;
    border-radius:12px;
    background: var(--primary);



    &:not(:first-child) {
        margin-top:15px;
    }
`


export const Status = styled.p`
    position:absolute;
    right:15px;
    width:100px;
    display:flex;
    align-items:center;
    justify-content:space-between;

    p {
        width:50px;
        font-size:${({status}) => status ? "16px": "15px"};
        
    }
    span {
        width:10px;
        height:10px;
        border-radius:100%;
        background-color:${({status}) => status ? "var(--dot-blue)": "var(--dot-red)"}
    }
`;

