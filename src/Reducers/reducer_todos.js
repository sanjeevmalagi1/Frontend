import _ from 'lodash';

import { 
    GET_TODOS_REQUEST,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILED
} from '../Actions/Todos'

import { 
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS,
    GET_TODO_FAILED
} from '../Actions/Todos'

import { 
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILED
} from '../Actions/Todos'

const INITIAL_STATE = {
    loading : false,
    error : false,
    data : {}
}

export default function(state=INITIAL_STATE,action){
    
    switch (action.type) {
        case GET_TODOS_REQUEST:{
            return {
                loading : true,
                error : false,
                data : {}
            }
        }
        case GET_TODOS_SUCCESS:{
            return {
                loading : false,
                data : _.mapKeys(action.payload,'_id')
            }
        }
        case GET_TODOS_FAILED:{
            return {
                data : {},
                loading : false,
                error : true
            }
        }
        case GET_TODO_SUCCESS : {
            const { payload } = action;
            return {
                ...state,
                data : {
                    ...state.data,
                    [payload._id] : payload
                }
            }
        }
        case DELETE_TODO_SUCCESS : {
            const { payload } = action;
            return {
                ...state,
                data : _.omit(state.data , payload._id)
            }
        }
        default:
            return state;
    }
}
  