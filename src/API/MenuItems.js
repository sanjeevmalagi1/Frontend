import axios from 'axios';

import { BASE_URL } from '../Constants';

export function getMenuItemsRequest(){
  return axios.get(`${BASE_URL}/menu.json`)
}