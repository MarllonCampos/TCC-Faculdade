import React from 'react';
import { useLocation, useHistory } from 'react-router';
import Header from '../../components/Header'
import { Container,WrapperIcon, Icon, Element, Status } from './styles'; 

function DescriptionCard({...props}) {
    const {elements,icon} = useLocation();
    const phrases = {
        "Luz":{phrase:"Luzes da Estufa",el: "Luz"},
        "Ventilador":{phrase:"Ventiladores da Estufa",el:"Ventilador"},
        "Irrigação":{phrase:"Irrigadores da Estufa",el:"Irrigador"},
        "Plantas":{phrase:"Plantas da Estufa",el:"Plantas"}
    }
    const history = useHistory();
    const goBack = () => {
      history.push("/list-estufas");
  }
    


  return (
      <Container> 
        <Header />  
        <WrapperIcon onClick={goBack}>
          
          {icon && (
            <>
            <Icon icon={icon} />
            <p>{phrases[icon].phrase}</p>
            </>
          )} 
        </WrapperIcon>
        {elements && elements.map(({nomeelem,ativo}) => 
          <Element>{phrases[icon].el}: {nomeelem} <Status status={ativo}>
            <p>{ativo ? "Ativado" : "Desativado"}</p> <span /> 
            </Status >
          </Element> )}
      </Container>


  );
}

export default DescriptionCard;