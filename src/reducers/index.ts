import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  error: errorReducer,
});

export default rootReducer;
