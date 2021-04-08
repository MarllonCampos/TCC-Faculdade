import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().min(2,"O nome tem que ter no minimo 2 caracteres").required(),
    email: yup.string().min(6,'Senha errada'),

});
export default schema;