import axios from 'axios';


const api = axios.create({
    baseURL: "https://backend-greenery.herokuapp.com",
    timeout:20000,
});



export  {api};