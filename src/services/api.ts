import axios from 'axios';
import { API_KEY, BASE_URL } from '../helpers/API.ts';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-API-KEY': API_KEY,
  },
});

export default api;
