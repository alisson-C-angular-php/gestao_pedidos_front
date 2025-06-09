import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5168/api/orders', 
});

export default api;
