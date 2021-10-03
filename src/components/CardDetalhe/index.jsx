import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Container,
  LeftMessage,
  Element,
  Unit,
} from "./styles";

const CardStatus = (props) => {
  return (
    <Container to={props.to} cor={props.cor}>
      <LeftMessage>
        <FontAwesomeIcon icon={props.iconess} size="lg" />
        <Element>{props.tipo}</Element>
      </LeftMessage>
      <Unit>ver detalhes</Unit>
    </Container>
  );
};

export default CardStatus;
