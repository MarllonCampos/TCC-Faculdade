import axios from 'axios';

const config = {
    baseURL: process.env.REACT_APP_API_URL === 'dev' ? 'http://localhost:3003' : 'https://backend-greenery.herokuapp.com',
    timeout: 20000,

}


const api = axios.create(config);



export  {api};