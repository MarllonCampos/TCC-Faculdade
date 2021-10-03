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
  labelStyle,
  inputContainerStyle,
  inputStyle,

  ...props
}) => {
  const [isPasswordType, setIsPasswordType] = useState(true);

  return (
    <Container>
      <Label style={labelStyle}htmlFor={idFor}> {labelText}</Label>
      <InputContainer style={inputContainerStyle}>
        {!noIcon && (
          <Input
            id={idFor}
            name={name}
            placeholder={placeholder}
            ref={register}
            onChange={onChange}
            required={required}
            style={inputStyle}
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
            style={inputStyle}

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
