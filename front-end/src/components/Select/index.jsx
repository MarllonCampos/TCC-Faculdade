import React, { useState } from 'react';

import { Container, Label, Input,InputContainer, ArrowIcon} from './styles';

const Select = ({elements,label,labelText, ...props}) => {
  const [isDropDownActive,setIsDropDownActive] = useState(false)

  return (
    <Container >
      <Label onClick={() => {setIsDropDownActive(!isDropDownActive)}}>{labelText}</Label>
      <InputContainer htmlFor={label}>
        <Input name={label} id={label} defaultValue="Selecione uma opção" onClick={() => {setIsDropDownActive(!isDropDownActive)}}>
          <option selected disabled >selecione uma opção</option>
          {elements && elements.map((options) => <option value={String(options).split(" ")[0]}>{options}</option>)}      
        </Input>
        <ArrowIcon  active={isDropDownActive}/>
      </InputContainer>
    </Container>
  );
};

export default Select;
