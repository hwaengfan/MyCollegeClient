import { loginData, AppDispatch } from '../types/ReduxTypes';

const loginAction = (loginData: loginData) => (dispatch: AppDispatch) => {
  if (loginData.username === 'student123' && loginData.password === 'xdd') {
    dispatch({ type: 'SET_CURRENT_USER', payload: 'student' });
  } else if (
    loginData.username === 'professor123' &&
    loginData.password === 'xdd'
  ) {
    dispatch({ type: 'SET_CURRENT_USER', payload: 'professor' });
  } else if (
    loginData.username === 'board123' &&
    loginData.password === 'xdd'
  ) {
    dispatch({ type: 'SET_CURRENT_USER', payload: 'board-member' });
  } else {
    dispatch({ type: 'GET_ERROR', payload: 'message' });
  }
};

const logoutAction = () => (dispatch: AppDispatch) => {
  dispatch({ type: 'SET_CURRENT_USER', payload: 'guest' });
};

export { loginAction, logoutAction };
