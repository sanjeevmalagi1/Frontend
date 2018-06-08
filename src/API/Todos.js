import axios from 'axios';

import { BASE_URL } from '../Constants';

export function getTodosRequest(){
  return axios.get(`${BASE_URL}/Todos`)
}

export function getTodoRequest(todoId){
  return axios.get(`${BASE_URL}/Todos/${todoId}`)
}

export function createTodoRequest(values,token){
  const config = {
    headers: { 
      token
    }
  };
  return axios.post(`${BASE_URL}/Todos`,values,config)
}

export function updateTodoRequest(todoId,values,token){
  const config = {
    headers: { 
      token
    }
  };
  return axios.patch(`${BASE_URL}/Todos/${todoId}`,values,config)
}

export function deleteTodoRequest(todoId,token){
  const config = {
    headers: { 
      token
    }
  };
  return axios.delete(`${BASE_URL}/Todos/${todoId}`,config)
}