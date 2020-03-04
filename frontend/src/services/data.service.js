import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/data/';

class DataService {
  getSites() {
    return axios.get(API_URL + 'getSites', { headers: authHeader() });
  }
}

export default new DataService();