import _ from 'lodash';

export default function(state={},action){
    
    switch (action.type) {
        case "ADD_ITEM":{
            const { payload } = action;
            const productId = payload.name;
            const quantity = _.get(state[productId],"quantity",0)+1;
            const totalPrice = quantity*payload.price;
            return {
                ...state,
                [productId] : {
                    ...payload,
                    quantity,
                    totalPrice 
                }
            }
        }
        case "REMOVE_ITEM":{
            const { payload } = action;
            const productId = payload.name;
            const quantity = _.get(state[productId],"quantity",0)-1;
            const totalPrice = quantity*payload.price;
            if(quantity<=0){
                return _.omit(state,productId)
            }
            return {
                ...state,
                [productId] : {
                    ...payload,
                    quantity,
                    totalPrice 
                }
            }
        }
        case "CLEAR_ALL":{
            return {}
        }
        default:
            return state;
    }
}
  