import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://10.21.162.15:8000/api/v1/'
});

export default axiosInstance;
