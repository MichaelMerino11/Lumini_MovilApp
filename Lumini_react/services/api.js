import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.0.2.2:5000', // Cambia a tu IP si usas un dispositivo físico
});

export default instance;
