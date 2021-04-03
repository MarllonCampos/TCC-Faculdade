import React, { useState, useEffect } from "react";

import {
  Container,
  ContentWrapper,
  IconBusca,
  Input,
  CloseIcon,
  InputContainer,
  BurgerIcon,
  Sidemenu,
  SidemenuContainer,
} from "./styles";

function Header({ icon, ...props }) {
  const [isInputShowing, setIsInputShowing] = useState(false);
  const [isSidemenuShowing, setIsSidemenuShowing] = useState(false);
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
              <Input />
              <CloseIcon onClick={closeInput} />
            </InputContainer>
          ) : (
            <IconBusca onClick={openInput} />
          )
        ) : (
          <div>a</div>
        )}

        <BurgerIcon
          openAnimation={isSidemenuShowing}
          onClick={() => setIsSidemenuShowing(!isSidemenuShowing)}
        />
        <Sidemenu openAnimation={isSidemenuShowing}>
          <div style={{padding:'3%', backgroundColor:'#0B8722',display:'flex', alignItems:'center',  paddingRight:'45px' }}>
            <img style={{borderRadius:'50%',}}src="https://via.placeholder.com/45/45" />
            <p style={{marginLeft:'10px'}}>Marllon Campos</p>
          </div>

        </Sidemenu>
      </ContentWrapper>
    </Container>
  );
}
export default Header;
