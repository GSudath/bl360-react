import axios from 'axios';
import { config } from 'process';

const instance = axios.create({
    baseURL: 'https://bluelotus360.co/CoreAPI/api',
    headers: {
        "Content-type" : "application/json",
        "Accept" : "application/json",
        "IntegrationID":"1aa6a39b-5f54-4905-880a-a52733fd6105"
      },
  });

  instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
    },
    (error) => {
        return Promise.reject(error);
    });

    export default instance;