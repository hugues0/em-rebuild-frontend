import { combineReducers } from "redux";
import userReducer from './userReducer';
import departmentReducer from './departmentReducer';

const RootReducer = combineReducers({
    userReducer,
    departmentReducer
})

export default RootReducer;