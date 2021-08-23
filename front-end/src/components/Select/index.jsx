import React from 'react';

import { Container, Label, Input,InputContainer, ArrowIcon} from './styles';

const Select = ({elements,label,labelText,onChange,ref, ...props}) => {
 

  return (
    <Container >
      <Label >{labelText}</Label>
      <InputContainer htmlFor={label}>
        <Input 
          name={label}
          id={label}
          defaultValue="Selecione uma opção" 
          onChange={onChange}
          ref={ref}
        >
          <option selected disabled >Selecione uma Opção</option>

          {elements && elements.map(
            (options) => <option key={`${options}+${Math.random()}`} value={String(options).split(" ")[0]}>{options}</option>
            )
          }      
        </Input>
        <ArrowIcon  />
      </InputContainer>
    </Container>
  );
};

export default Select;
