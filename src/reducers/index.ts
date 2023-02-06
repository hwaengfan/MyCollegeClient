import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  error: errorReducer,
  user: userReducer,
});

export default rootReducer;
