import React, { useState, useEffect } from "react";
import { A } from "./styles";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

import Form from "../../components/Form";

import Main from "../../components/Main";
import Ola from "../../components/Ola";
import InputText from "../../components/Input";
import { api } from "../../utils/api";
import { Span } from "./styles";

import swal from "sweetalert";


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
  async function handleSubmit() {
    if (formik.values.senha.length < 1  || formik.values.confirmaSenha.length < 1 || formik.values.senha !== formik.values.confirmaSenha )
      return swal("Error!","Precisa de uma senha valida ", "warning");   
  else{
    const response = await api.post("/client",formik.values);
    console.log(response.data);
    swal("Sucesso!","Nova senha Cadastrada ",  "success");

  }
    
  }
  return (
    
      
        <Main>
           { formik.values ? (
        <Form
          style={{ textAlign: "center" }}
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

        <Button onClick={handleSubmit} style={{ marginTop: "30px" }}>
          Recuperar
        </Button>
      </Form>
   



       ): (
        <Loading />
       )
      }
       </Main>

       
  );
}
export default Recuperar;
