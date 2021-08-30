import React, { useState, useEffect } from "react";
import { A } from "./styles";
import Title from "../../components/Title";
import Button from "../../components/Button";

import Form from "../../components/Form";
import { api } from "../../utils/api";
import axios from "axios";

import Main from "../../components/Main";
import Ola from "../../components/Ola";
import InputText from "../../components/Input";
import { Span } from "./styles";
import { Windows } from "@styled-icons/simple-icons";

//Validação de Usuario
function useFormik({ initialValues, validate }) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function handleChange(event) {
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

function Cadastro() {
  async function handleSubmit() {
    const response = await api.post("/client", formik.values);
    if (response.status === 201) {
      alert("Cadastrado");
    } else {
      alert("erro ao cadatra o usuario");
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
      confirmaSenha: "",
      nome: "",
    },
    validate: function (values) {
      const errors = {};

      if (!values.email.includes("@")) {
        errors.email = "Por favor, insira um e-mail válido";
      }

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
      <Form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        style={{ textAlign: "center" }}
      >
        <Ola></Ola>
        <Title title="Faça seu cadastro" />
        <div>
          <InputText
            labelText="Nome:"
            noIcon="true"
            name="nome"
            id="nome"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
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
        {formik.touched.email && formik.errors.email && (
          <Span>{formik.errors.email}</Span>
        )}
        <Button
          disabled={
            formik.values.email.length === 0 || formik.values.senha.length === 0
          }
        >
          <A onClick={handleSubmit} href="#">
            Register
          </A>
        </Button>
      </Form>
    </Main>
  );
}
export default Cadastro;

