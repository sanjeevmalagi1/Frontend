import axios from 'axios';

import { BASE_URL } from '../Constants';

export function getTodosRequest(){
  return axios.get(`${BASE_URL}/Todos`)
}