import {combineReducers} from 'redux';
import LoginReducer from '../../views/login/reducer/reducer';

const RootReducer = combineReducers({
  login: LoginReducer
});

export default RootReducer;
