import axios from 'axios';


const api = axios.create({
  baseURL: "http://localhost:3333",
    timeout:20000,
});



export  {api};