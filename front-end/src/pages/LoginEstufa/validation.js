import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().min(2,"O nome tem que ter no minimo 2 caracteres").required(),
    email: yup.string().min(6,'Senha errada'),

});


export const createUserSchema = yup.object().shape({
    name:yup.string().min(1,'O nome deve conter no minimo um caractere'),

    email:yup.string().email('Insira um e-mail válido').required('O email é obrigatório'),

    password:yup.string().min(5,'A senha deve conter no minimo 5 caracteres').required(),

    confirm:yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('O campo de confirmação é obrigatório'),

})


export const loginSchema = yup.object().shape({
    email: yup.string().email('Insira um e-mail válido').required('O email é obrigatório'),

    password:yup.string().required('A senha é obrigatória').min(5, 'A senha deve conter no minimo 5 caracteres')
})
export default schema;