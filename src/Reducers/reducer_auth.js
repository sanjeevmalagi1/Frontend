import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../Actions/Auth'

import { 
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED
} from '../Actions/Auth'

import { 
    LOGOUT
} from '../Actions/Auth'


const INITIAL_STATE = {
    token : localStorage.getItem('token'),
    id : localStorage.getItem('id'),
    username : localStorage.getItem('username')
}

export default function(state=INITIAL_STATE,action){
    
    switch (action.type) {
        case LOGIN_SUCCESS:{
            localStorage.setItem('token',action.payload.token)
            localStorage.setItem('id',action.payload.id)
            localStorage.setItem('username',action.payload.username)
            return {
                token : action.payload.token,
                id : action.payload.id,
                username : action.payload.username
            }
        }
        case SIGNUP_SUCCESS:{
            localStorage.setItem('token',action.payload.token)
            localStorage.setItem('id',action.payload.id)
            localStorage.setItem('username',action.payload.username)
            return {
                token : action.payload.token,
                id : action.payload.id,
                username : action.payload.username
            }
        }
        case LOGOUT:{
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            localStorage.removeItem('username')

            return {}
        }
        default:
            return state;
    }
}
  