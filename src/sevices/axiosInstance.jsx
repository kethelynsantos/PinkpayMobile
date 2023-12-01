import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://172.19.240.1:8000/api/v1/'
});

export default axiosInstance;
