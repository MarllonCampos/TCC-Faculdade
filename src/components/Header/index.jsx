import React, { useState  } from "react";
import {useHistory} from 'react-router-dom'
import {ArrowIosBack} from '@styled-icons/evaicons-solid/ArrowIosBack'
import { PersonFill } from '@styled-icons/bootstrap/PersonFill'

import {
  Container,
  ContentWrapper,
  IconBusca,
  Input,
  CloseIcon,
  InputContainer,
} from "./styles";

function Header({ onChange,icon, goTo="", noPerson, ...props }) {
  const history = useHistory();
  const [isInputShowing, setIsInputShowing] = useState(false);
  const [hasToWait, setHasToWait] = useState(false);

  function openInput() {
    setIsInputShowing(true);
    setHasToWait(false);
  }

  function closeInput() {
    setHasToWait(true);
    setTimeout(() => {
      setIsInputShowing(false);
    }, 280);
  }

  function goToBack() {
    if (goTo === '') {
      history.goBack()
    }
    history.push(goTo)
  }

  return (
    <Container {...props}>
      <ContentWrapper>
        {icon ? (
          isInputShowing ? (
            <InputContainer closeAnimation={hasToWait}>
              <Input onChange={onChange} />
              <CloseIcon onClick={closeInput} />
            </InputContainer>
          ) : (
            <IconBusca onClick={openInput} />
          )
        ) : (
          <ArrowIosBack cursor="pointer" onClick={goToBack} size={38} fill="#fff" />
        )}
        {!noPerson && (<PersonFill cursor="pointer" onClick={() => history.push('/painel-usuario')} size={38} fill="#fff"/>)}
        
      </ContentWrapper>
    </Container>
  );
}
export default Header;
