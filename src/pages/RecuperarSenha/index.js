import React, { useState, useEffect } from "react";
import { A } from "./styles";
import Title from "../../components/Title";
import Button from "../../components/Button";

import Form from "../../components/Form";

import Main from "../../components/Main";
import Ola from "../../components/Ola";
import InputText from "../../components/Input";
import { Span } from "./styles";

//Validação de Usuario
function useFormik({ initialValues, validate }) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function handleChange(event) {
    const campoName= event.target.getAttribute("name");
    const { value } = event.target;
    setValues({
      ...values,
      [campoName]: value,
    });
  }

  function handleBlur(event) {
    const campoName = event.target.getAttribute("name");
    console.log(campoName);
    setTouchedFields({
      ...touched,
      [campoName]: true,
    });
  }

  function validateValues(values) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
}

function RecuperarSenha() {
  const formik = useFormik({
    initialValues: {
      email: "",
   
    },
    validate: function (values) {
      const errors = {};

      if (!values.email.includes("@")) {
        errors.email = "Por favor, insira um e-mail válido";
      }   

      return errors;
    },
  });

  return (
    <Main>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(formik.values);
        }}
        style={{ textAlign: "center" }}
      >
        <Ola></Ola>
        <Title title="Resgate sua conta" />

        <InputText
          labelText="Email:"
          noIcon="true"
          type="email"
          name="email"
          id="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && <Span >{formik.errors.email}</Span>}

        <Button style={{marginTop: "30px"}}>
          <A href="recuperar">Recuperar</A>
        </Button>
      </Form>
    </Main>
  );
}
export default RecuperarSenha;