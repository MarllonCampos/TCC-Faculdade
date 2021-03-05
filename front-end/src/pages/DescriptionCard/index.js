import React from 'react';
import Header from '../../components/Header'
import { Container,WrapperIcon, Icon, Element, Status } from './styles';

function DescriptionCard({icon="light",elements,...props}) {
    const phrases = {
        "light":{phrase:"Luzes da Estufa",el: "Luz"},
        "fan":{phrase:"Ventiladores da Estufa",el:"Ventilador"},
        "sprinkle":{phrase:"Irrigadores da Estufa",el:"Irrigador"}
    }

    


  return (
      <Container> 
        <Header />  
        <WrapperIcon>
            <Icon icon="light" />
            {icon && <p>{phrases[icon].phrase}</p>}
        </WrapperIcon>

        {elements.map(({name,status}) => <Element>{phrases[icon].el}: {name} <Status status={status}> <p>{status ? "Ativado" : "Desativado"}</p> <span /> </Status > </Element> )}
      </Container>


  );
}

export default DescriptionCard;