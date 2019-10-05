import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/Domeniqque/rocketshoes-react-native',
});

export default api;
