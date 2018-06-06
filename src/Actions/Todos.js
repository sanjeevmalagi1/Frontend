import { 
    getTodosRequest,
} from '../API/Todos';

export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

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