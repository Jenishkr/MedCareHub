import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/backend/api', // Backend API URL
});

export default api;
