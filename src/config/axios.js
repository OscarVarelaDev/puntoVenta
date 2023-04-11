import axios from 'axios';

const clienteAxios = axios.create({
    baseURL:"https://api-token-products.onrender.com/api/"

});

export default clienteAxios;