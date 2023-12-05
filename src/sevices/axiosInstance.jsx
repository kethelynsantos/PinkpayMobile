import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.37:8000/api/v1/'
});

export default axiosInstance;
