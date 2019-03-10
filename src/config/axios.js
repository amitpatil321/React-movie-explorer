import axios from 'axios'
import * as CONFIG from './config';

const instance = axios.create();

// request header
instance.interceptors.request.use((config) => {
    config.params = { api_key : CONFIG.API_KEY };
    return config;
}, error => {
    return Promise.reject(error)
})

export default instance 
