import { SET_CURRENT_USER, SET_ERROR } from '../types/ActionTypes';
import { AppDispatch, loginData, signupData } from '../types/ReduxTypes';

const loginAction = (loginData: loginData) => (dispatch: AppDispatch) => {
  if (loginData.username === 'student123' && loginData.password === 'xdd') {
    dispatch({ type: SET_CURRENT_USER, payload: 'student' });
    dispatch({ type: SET_ERROR, payload: '' });
  } else if (
    loginData.username === 'professor123' &&
    loginData.password === 'xdd'
  ) {
    dispatch({ type: SET_CURRENT_USER, payload: 'professor' });
    dispatch({ type: SET_ERROR, payload: '' });
  } else if (
    loginData.username === 'board123' &&
    loginData.password === 'xdd'
  ) {
    dispatch({ type: SET_CURRENT_USER, payload: 'board-member' });
    dispatch({ type: SET_ERROR, payload: '' });
  } else {
    dispatch({ type: SET_ERROR, payload: 'Invalid username or password!' });
  }
};

const logoutAction = () => (dispatch: AppDispatch) => {
  dispatch({ type: SET_CURRENT_USER, payload: 'guest' });
};

const signupAction = (signupData: signupData) => (dispatch: AppDispatch) => {
  dispatch({ type: SET_CURRENT_USER, payload: 'student' });
};

export { loginAction, logoutAction, signupAction };
