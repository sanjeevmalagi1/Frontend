import { 
    loginRequest,
    signupRequest,
} from '../API/Auth';

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";

export const LOGOUT = "LOGOUT";

export function login(values){
    return (dispatch) => {
      dispatch({ type: LOGIN_REQUEST })
      loginRequest(values)
        .then(data =>{
          dispatch({ type: LOGIN_SUCCESS,payload : data.data })
        })
        .catch(error =>{
          dispatch({ type: LOGIN_FAILED,payload : error })
        })
    }
}

export function signup(values){
    return (dispatch) => {
      dispatch({ type: SIGNUP_REQUEST })
      signupRequest(values)
        .then(data =>{
          dispatch({ type: SIGNUP_SUCCESS,payload : data.data })
        })
        .catch(error =>{
          dispatch({ type: SIGNUP_FAILED,payload : error })
        })
    }
}


export function logout(){
  return {
    type : LOGOUT
  }
}