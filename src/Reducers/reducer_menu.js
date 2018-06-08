
const INITIAL_STATE = {
    drawer : false
}
export default function(state=INITIAL_STATE,action){
    
    switch (action.type) {
        case 'OPEN_DRAWER':{
            return {
                ...state,
                drawer : true
            }
        }
        case 'CLOSE_DRAWER':{
            return {
                ...state,
                drawer : false
            }
        }
        default:
            return state;
    }
}
  