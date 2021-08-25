import React, { useState  } from "react";
import {useHistory} from 'react-router-dom'
import {ArrowIosBack} from '@styled-icons/evaicons-solid/ArrowIosBack'
import {
  Container,
  ContentWrapper,
  IconBusca,
  Input,
  CloseIcon,
  InputContainer,
} from "./styles";

function Header({ onChange,icon, ...props }) {
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


  return (
    <Container>
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
          <ArrowIosBack onClick={history.goBack}size={38}/>
        )}
      </ContentWrapper>
    </Container>
  );
}
export default Header;
