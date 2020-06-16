// axiosconfig.js
import axios from 'axios';
import store from '../redux/store.js';

// configure base url
const api = axios.create({
  baseURL: 'http://localhost:8008/api'
});

// intercept requests and add authorization token
api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
