import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form'

import MenuReducer from './reducer_menu';
import TodosReducer from './reducer_todos';
import FilterReducer from './reducer_filter';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
    menu : MenuReducer,
    todos : TodosReducer,
    filter : FilterReducer,
    auth : AuthReducer,
    form: formReducer
});

export default rootReducer;
