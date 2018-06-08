import { 
    getUsersRequest
} from '../API/Users';

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

export function getUsers(){
    return (dispatch) => {
      dispatch({ type: GET_USERS_REQUEST })
      getUsersRequest()
        .then(data =>{
          dispatch({ type: GET_USERS_SUCCESS,payload : data.data })
        })
        .catch(error =>{
          dispatch({ type: GET_USERS_FAILED,payload : error })
        })
    }
}
