import { 
    getMenuItemsRequest,
} from '../API/MenuItems';

export const MENU_ITEMS_REQUEST = "MENU_ITEMS_REQUEST";
export const MENU_ITEMS_SUCCESS = "MENU_ITEMS_SUCCESS";
export const MENU_ITEMS_FAILED = "MENU_ITEMS_FAILED";

export function getMenuItems(){
    return (dispatch) => {
      dispatch({ type: MENU_ITEMS_REQUEST })
      getMenuItemsRequest()
        .then(data =>{
          dispatch({ type: MENU_ITEMS_SUCCESS,payload : data.data })
        })
        .catch(error =>{
          dispatch({ type: MENU_ITEMS_FAILED,payload : error })
        })
    }
}