import _ from 'lodash';

import { 
    GET_TODOS_REQUEST,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILED
} from '../Actions/Todos'

export default function(state={},action){
    
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
        default:
            return state;
    }
}
  