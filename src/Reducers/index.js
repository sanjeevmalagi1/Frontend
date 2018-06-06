import { combineReducers } from 'redux';

import MenuItemsReducer from './reducer_menuItems';
import CartReducer from './reducer_cart';
import TodosReducer from './reducer_todos';

const rootReducer = combineReducers({
    menuItems : MenuItemsReducer,
    cart : CartReducer,
    todos : TodosReducer
});

export default rootReducer;
