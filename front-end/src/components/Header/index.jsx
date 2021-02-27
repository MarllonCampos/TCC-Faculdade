import React, { useState } from "react";

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
  const [showInput, setShowInput] = useState(false);

  function handleToggleInput() {
    setShowInput(!showInput);
  }

  return (
    <Container>
      <ContentWrapper>
        {icon &&
          (showInput ? (
            <InputContainer>
              <Input />
              <CloseIcon onClick={handleToggleInput} />
            </InputContainer>
          ) : (
            <IconBusca onClick={handleToggleInput} />
          ))}

        <Sidemenu />
      </ContentWrapper>
    </Container>
  );
}
export default Header;
