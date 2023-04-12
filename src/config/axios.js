import axios from 'axios';

const clienteAxios = axios.create({
    //baseURL:"http://localhost:4000",
  baseURL:"https://api-token-products.onrender.com/api/"

});

export default clienteAxios;