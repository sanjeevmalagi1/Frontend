import { 
    getTodosRequest,
    createTodoRequest,
    updateTodoRequest,
    deleteTodoRequest,
    getTodoRequest
} from '../API/Todos';

export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

export const GET_TODO_REQUEST = "GET_TODO_REQUEST";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAILED = "GET_TODO_FAILED";

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILED = "DELETE_TODO_FAILED";

export function getTodos(){
    return (dispatch) => {
      dispatch({ type: GET_TODOS_REQUEST })
      getTodosRequest()
        .then(data =>{
          dispatch({ type: GET_TODOS_SUCCESS,payload : data.data })
        })
        .catch(error =>{
          dispatch({ type: GET_TODOS_FAILED,payload : error })
        })
    }
}

export function getTodo(todoId){
  return (dispatch) => {
    dispatch({ type: GET_TODO_REQUEST })
    getTodoRequest(todoId)
      .then(data =>{
        dispatch({ type: GET_TODO_SUCCESS,payload : data.data })
      })
      .catch(error =>{
        dispatch({ type: GET_TODO_FAILED,payload : error })
      })
  }
}

export function createTodo(values,callback){
  return (dispatch,getState) => {
    const state = getState();
    const token = state.auth.token;
    //dispatch({ type: GET_TODO_REQUEST })
    createTodoRequest(values,token)
      .then(data =>{
        //dispatch({ type: GET_TODO_SUCCESS,payload : data.data })
        callback(null,true)
      })
      .catch(error =>{
        //dispatch({ type: GET_TODO_FAILED,payload : error })
        callback(error)
      })
  }
}

export function updateTodo(todoId,values,callback){
  return (dispatch,getState) => {
    const state = getState();
    const token = state.auth.token;
    dispatch({ type: GET_TODO_REQUEST })
    updateTodoRequest(todoId,values,token)
      .then(data =>{
        dispatch({ type: GET_TODO_SUCCESS,payload : data.data })
        callback(null,true);
      })
      .catch(error =>{
        dispatch({ type: GET_TODO_FAILED,payload : error })
        callback(error);
      })
  }
}

export function deleteTodo(todoId,callback){
  return (dispatch,getState) => {
    const state = getState();
    const token = state.auth.token;
    dispatch({ type: DELETE_TODO_REQUEST })
    deleteTodoRequest(todoId,token)
      .then(data =>{
        dispatch({ type: DELETE_TODO_SUCCESS,payload : data.data })
        callback(null,data);
      })
      .catch(error =>{
        dispatch({ type: DELETE_TODO_FAILED,payload : error })
        callback(error);
      })
  }
}