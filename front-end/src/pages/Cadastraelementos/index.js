import React, {useState, useFormik, useEffect} from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import Form from '../../components/Form';
import { Conteiner,Title2, } from "./styles"
import Header from '../../components/Header'
import Select from '../../components/Select'

import Ola from '../../components/Ola'
import InputText from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

function  CadastroElemento() {

    function useFormik({
  initialValues,
  validate
}) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

 

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  const [tipoelem, settipoelem] = useState(false)
  useEffect(()=>{
      if (tipoelem!= false){
          console.log(tipoelem)
      } 
  },[tipoelem] )
  function handleBlur(event) {
    const fieldName = event.target.getAttribute('name');
    console.log(fieldName);
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    })
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
    handleChange
  };
}


  const formik = useFormik({
    initialValues: {
      nomeelemt: '',
      tipoelemt: '',
      portaelemt:'',
    },
    validate: function (values) {
      const errors = {};
    
      if(!values.nomeelemt.includes('estufa')) {
        errors.nomeelemt = 'Digite a um nome para Estufa';
      }
      if(values.tipoelemt.includes('lampada')) {
        errors.tipoelemt= 'Escolha uma opcao';
      }
    
    
      if(values.portaelemt.includes('1')) {
        errors.portaelemt= 'Escolha uma opcao';
      }
    
      return errors;
    }
  });

    
    


    return (
        <>
        <Form onSubmit={(event) => {
      event.preventDefault();
      console.log(formik.values);
        }
        }>
        <Header icon/>
        <Conteiner>
           
        
            <Ola/>
            
            <Title2>Elementos da Estufa</Title2>
           
            <InputText noIcon idFor="user" 
            placeholder="Digite o nome do Elemento"
             name="nomelemt"
             type="text"
             labelText="Nome do Elemento:" 
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.nomelemt}
              />
               {   formik.errors.nomeelemt?.message  &&   <Modal 
                    style={{marginTop:"25px"}}
                    visible={false}
                    titulo="Error"
                    conteudo={formik.errors.nomeelemt?.message}                   
                    page="/cadastra-elemento"                 
                    ></Modal> }
              

            <Select  labelText="Tipo de elemento:"  
        
             name="tipoelemt"
             type="text"
             elements={["Seleciona um Elemento","Lampada", "Ventilador","Agua"]} 
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.tipoelemt}
             />
             {  formik.errors.tipoelemt?.message  &&   <Modal 
                    style={{marginTop:"25px"}}
                    visible={false}
                    titulo="Error"
                    conteudo={formik.errors.tipoelemt?.message}                   
                    page="/cadastra-elemento"                 
                    ></Modal> }


             <Select
             labelText="Porta do Elemento:"  
             name="portaelemt"
             type="text"
             elements={["Insira a porta inserida",1,2,3,4,5,]} 
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.portaelemt}
             />
              { formik.errors.portaelemt?.message  &&   <Modal 
                    style={{marginTop:"25px"}}
                    visible={false}
                    titulo="Error"
                    conteudo={formik.errors.portaelemt?.message}                   
                    page="/cadastra-elemento"                 
                    ></Modal> }
             
            <Button  type="submit" >Cadastrar</Button>
        </Conteiner>
        </Form>
        </>
    )
    
}
export default CadastroElemento;
