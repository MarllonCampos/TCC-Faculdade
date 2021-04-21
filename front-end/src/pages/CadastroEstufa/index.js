import React, { useState, useFormik } from "react";
import { Conteiner,Title1, } from "./styles"

import Header from '../../components/Header'
import Form from '../../components/Form';
import Ola from '../../components/Ola'
import InputText from '../../components/Input';
import Button from '../../components/Button';




function CadastroEstufa() {

  function useFormik({  initiavalues
  }){
      const[values, setValues]=  useState(initiavalues);
      console.log(initiavalues);
      

      function handleChange(event){
          const fieldName= event.target.getAttribute('name');
          const value =event.target.value;
          setValues({
              ...values,
              [fieldName]:value,
              
          })

      }
      
      
      return{
          values,
          handleChange
      };
  }
   const formik= useFormik({
       initiavalues:{
      nomeestufa:'',
      
       }
   });  
  
  
    return (
        <>
         <Form  onSubmit={(event) => {
            event.preventDefault();
            console.log(formik.values);
        }
        }>
        
        <Header icon />
        <Conteiner>
          <Ola/> 
        <Title1>Cadastro de Estufas </Title1>
        
        <InputText noIcon idFor="user" 
            placeholder="Digite o nome da Estufa"
             name="nomeestufa"
             type="text"
             labelText="Nome da Estufa:" 
             onChange={formik.handleChange}
             value={formik.values.nomeestufa}
              />
        
        <Button >Cadastrar</Button> 
        
        </Conteiner>
        </Form>
        </>
        
    )
    
}
export default CadastroEstufa;
