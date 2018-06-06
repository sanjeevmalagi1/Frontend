import _ from 'lodash';

import { 
    MENU_ITEMS_REQUEST,
    MENU_ITEMS_SUCCESS,
    MENU_ITEMS_FAILED
} from '../Actions/MenuItems'

export default function(state={},action){
    
    switch (action.type) {
        case MENU_ITEMS_REQUEST:{
            return {
                loading : true
            }
        }
        case MENU_ITEMS_SUCCESS:{
            return {
                loading : false,
                categories : _.groupBy(action.payload,'category')
            }
        }
        case MENU_ITEMS_FAILED:{
            return {
                loading : false,
                error : true
            }
        }
        default:
            return state;
    }
}
  