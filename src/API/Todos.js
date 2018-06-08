import axios from 'axios';

import { BASE_URL } from '../Constants';

export function getTodosRequest(){
  return axios.get(`${BASE_URL}/Todos`)
}

export function createTodoRequest(values){
  return axios.post(`${BASE_URL}/Todos`,values)
}

export function updateTodoRequest(todoId,values){
  return axios.patch(`${BASE_URL}/Todos/${todoId}`,values)
}

export function deleteTodoRequest(todoId){
  return axios.delete(`${BASE_URL}/Todos/${todoId}`)
}