const INITIAL_STATE = {
    search : ""
};
export default function(state=INITIAL_STATE,action){
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
  