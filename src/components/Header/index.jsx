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
  BurgerIconContainer,
  BurgerIcon,
  Sidemenu,
  SidemenuContainer,
} from "./styles";

function Header({ onChange,icon, ...props }) {
  const history = useHistory();
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
              <Input onChange={onChange} />
              <CloseIcon onClick={closeInput} />
            </InputContainer>
          ) : (
            <IconBusca onClick={openInput} />
          )
        ) : (
          <ArrowIosBack onClick={history.goBack}size={38}/>
        )}
      <BurgerIconContainer  onClick={() => setIsSidemenuShowing(!isSidemenuShowing)} >
        <BurgerIcon
          openAnimation={isSidemenuShowing}
         
        />
      </BurgerIconContainer>
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