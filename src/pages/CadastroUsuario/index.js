import React, { useState, useEffect } from "react";

import Title from "../../components/Title";
import Button from "../../components/Button";
import Form from "../../components/Form";
import InputText from "../../components/Input";
import Main from "../../components/Main";
import Ola from "../../components/Ola";
import Loading from "../../components/Loading";

import { api } from "../../utils/api";

import { Span } from "./styles";

import swal from "sweetalert";

import { useHistory } from "react-router-dom";


// função para Validação de Usuario
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

  const history = useHistory()
  const rota = () => history.push('/');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  });

  async function handleSubmit() {
    setLoading(true);
    const response = await api.post("/client", formik.values);
    console.log(response);
    

    if (response.status == 201) {
      swal("Sucesso!", "Seu cadastro foi realizado com sucesso!", "success").then(function(){
      rota()
      });
       
    }
    if (response.status !== 201) {
      swal("Error!", "Error em realizar o cadastro!", "warning");
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
      
    {loading && <Loading></Loading>}
      {!loading && (
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
            href="/"
            onClick={handleSubmit}
            disabled={
              formik.values.email.length === 0 ||
              formik.values.senha.length < 8 ||
              formik.values.confirmaSenha !== formik.values.senha
            }
          >
            Registro
          </Button>
        </Form>
      )}
    </Main>
  );
}
export default Cadastro;
