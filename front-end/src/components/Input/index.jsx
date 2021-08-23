import React, { useState } from "react";

import {
  Container,
  Label,
  InputContainer,
  Input,
  PasswordIcon,
} from "./styles";

const InputText = ({
  placeholder = "",
  type,
  name,
  onChange,
  idFor,
  labelText,
  register,
  noIcon,
  required,
  ...props
}) => {
  const [isPasswordType, setIsPasswordType] = useState(true);

  return (
    <Container>
      <Label htmlFor={idFor}> {labelText}</Label>
      <InputContainer>
        {!noIcon && (
          <Input
            id={idFor}
            name={name}
            placeholder={placeholder}
            ref={register}
            onChange={onChange}
            required={required}
            type={isPasswordType ? "password" : "text"}
            {...props}
          />
        )}

        {noIcon && (
          <Input
            id={idFor}
            name={name}
            placeholder={placeholder}
            ref={register}
            onChange={onChange}
            type={type}
            {...props}
          />
        )}

        {!noIcon && (
          <PasswordIcon onClick={() => setIsPasswordType(!isPasswordType)} />
        )}
      </InputContainer>
    </Container>
  );
};

export default InputText;
