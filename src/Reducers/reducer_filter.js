import _ from 'lodash';

export default function(state={},action){
    switch (action.type) {
        case "SEARCH_CHANGED":{
            return {
                ...state,
                search : action.payload
            }
        }
        default:
            return state;
    }
}
  