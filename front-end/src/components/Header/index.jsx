import React, { useState, useEffect } from "react";

import {
  Container,
  ContentWrapper,
  IconBusca,
  InputContainer,
  Input,
  CloseIcon,
  Sidemenu,
} from "./styles";

function Header({ icon, ...props }) {
  const [isInputShowing, setIsInputShowing] = useState(false);
  const [hasToWait, setHasToWait] = useState(false);

  function openInput() {
    setIsInputShowing(true);
    setHasToWait();
  }

  function closeInput(){
    setHasToWait(true);
    setTimeout(() => {
      setIsInputShowing(false);

    },280);
    
  }


  return (
    <Container>
      <ContentWrapper>
        {icon &&
          (isInputShowing ? (
            <InputContainer closeAnimation={hasToWait}>
              <Input />
              <CloseIcon onClick={closeInput} />
            </InputContainer>
          ) :
            <IconBusca onClick={openInput} />
          )}

        <Sidemenu />
      </ContentWrapper>
    </Container>
  );
}
export default Header;
