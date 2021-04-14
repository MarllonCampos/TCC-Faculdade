import React, {useState, useFormik} from "react";
import { useForm } from "react-hook-form";
import Form from '../../components/Form';
import { Conteiner,Title1,Title2, } from "./styles"
import Header from '../../components/Header'
import Select from '../../components/Select'
import Ola from '../../components/Ola'
import InputText from '../../components/Input';
import Button from '../../components/Button';






function  CadastroElemento() {
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
        }
    }
     const formik= useFormik({
         initiavalues:{
        nomelemt:'',
        tipoelemt:'',
         }
     });  
    return (
        <>
        <Form  onSubmit={(event) => {
            event.preventDefault();
            console.log(formik.values);
        }
        }>
        <Header icon/>
        <Conteiner>
           
        
            <Ola/>
            <Title1>Cadastro de Estufas </Title1>
            <Title2>Elementos da Estufa</Title2>
           
            <InputText noIcon idFor="user" 
            placeholder="Digite o nome do Elemento"
             name="nomelemt"
             type="text"
             labelText="Nome do Elemento:" 
             onChange={formik.handleChange}
             value={formik.values.nomelemt}
              />

            <Select  labelText="Tipo de elemento:"  
             name="tipoelemt"
             type="text"
             elements={["Lampada", "Ventilador","Agua"]} 
             onChange={formik.handleChange}
             value={formik.values.tipoelemt}
             />
             
            <Button  >Cadastrar</Button>
        </Conteiner>
        </Form>
        </>
    )
    
}
export default CadastroElemento;
