import React, { useState } from "react";

import {
  Container,
  IconBusca,
  InputContainer,
  Input,
  CloseIcon,
  Sidemenu,
} from "./styles";

function Header({icon, ...props}) {
  const [showInput, setShowInput] = useState(false);

  function heandleToggleInput() {
    setShowInput(!showInput);
  }

  return (
    <Container>
      
        {showInput ? (
          <InputContainer>
            <Input />
            <CloseIcon onClick={heandleToggleInput} />
          </InputContainer>
        ) : (
          <IconBusca icon={icon} onClick={heandleToggleInput} />
        )}

        <Sidemenu />
      
    </Container>
  );
}
export default Header;
