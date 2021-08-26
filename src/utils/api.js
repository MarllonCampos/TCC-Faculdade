import axios from 'axios';

const config = {
    baseURL: process.env.REACT_APP_LOCAL === 'dev' ? 'http://localhost:3003' : process.env.REACT_APP_API_URL,
    timeout: 20000,

}


const api = axios.create(config);



export  {api};