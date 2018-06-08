import _ from 'lodash';

import { 
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILED
} from '../Actions/Users'

export default function(state={},action){
    
    switch (action.type) {
        case GET_USERS_REQUEST:{
            return {
                loading : true,
                error : false,
                data : {}
            }
        }
        case GET_USERS_SUCCESS:{
            return {
                loading : false,
                data : _.mapKeys(action.payload,'_id')
            }
        }
        case GET_USERS_FAILED:{
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
  