import axios from 'axios';

import { BASE_URL } from '../Constants';

export function loginRequest(values){
  return axios.post(`${BASE_URL}/User/login`,values)
}

export function signupRequest(values){
  return axios.post(`${BASE_URL}/User/signup`,values)
}