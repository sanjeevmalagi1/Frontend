import axios from 'axios';

import { BASE_URL } from '../Constants';

export function getUsersRequest(){
  return axios.get(`${BASE_URL}/Users`)
}
