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
    console.log(event.target.value);
    const campoNome = event.target.getAttribute("name");
    const { value } = event.target;
    setValues({
      ...values,
      [campoNome]: value,
    });
  }

  function handleBlur(event) {
    const campoNome = event.target.getAttribute("name");
    console.log(campoNome);
    setTouchedFields({
      ...touched,
      [campoNome]: true,
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

function Recuperar() {
  const formik = useFormik({
    initialValues: {      
      senha: "",
      confirmaSenha: "",
      
    },
    validate: function (values) {
      const errors = {};    

      if (values.senha.length < 8) {
        errors.senha = "A senha deve conter no minimo 8 caracteres ";
      }

      if (values.confirmaSenha !== values.senha) {
        errors.confirmaSenha = "Senha diferente";
      }

      return errors;
    },
  });

  return (
    <Main>
      <Form  style={{ textAlign: "center" }}
        onSubmit={(event) => {
          event.preventDefault();
          console.log(formik.values);
        }}
       
      >
        <Ola></Ola>
        <Title title="Resgate sua conta" />

        <InputText
          labelText="Senha:"
          type="text"
          name="senha"
          id="senha"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.senha}
        />
        {formik.touched.senha && formik.errors.senha && (
          <Span>{formik.errors.senha}</Span>
        )}

        <InputText
          labelText="Confirmar Senha:"
          type="text"
          name="confirmaSenha"
          id="confirmaSenha"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.confirmaSenha}
        />
        {formik.touched.senha && formik.errors.confirmaSenha && (
          <Span>{formik.errors.confirmaSenha}</Span>
        )}

        <Button>
          <A href="#">Register</A>
        </Button>
      </Form>
    </Main>
  );
}
export default Recuperar;
