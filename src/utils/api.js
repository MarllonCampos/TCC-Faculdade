import axios from 'axios';

const backend = process.env.BACKEND === 'dev' ? 'http://localhost:3003' : 'https://backend-greenery.herokuapp.com'

const api = axios.create({
    baseURL: backend,
    timeout:20000,
});



export  {api};