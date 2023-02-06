import { SET_CURRENT_USER } from '../types/ActionTypes';
import {
  AppDispatch,
  LoginData,
  SignupData,
  UserData,
} from '../types/ReduxTypes';
import {
  board,
  guest,
  professor,
  student,
} from '../__mock-data__/currentUsers';
import { clearError, setError } from './errorAction';
import { setUserInfoAction } from './userAction';

const checkUserPass = (username: string, password: string): UserData => {
  if (username === student.username && password === student.password) {
    return student;
  } else if (
    username === professor.username &&
    password === professor.password
  ) {
    return professor;
  } else if (username === board.username && password === board.password) {
    return board;
  } else {
    return guest;
  }
};

const loginAction = (loginData: LoginData) => (dispatch: AppDispatch) => {
  const data = checkUserPass(loginData.username, loginData.password);

  if (data.userType !== 'guest') {
    dispatch(setCurrentUserAction(data.userType));
    dispatch(setUserInfoAction(data));
    dispatch(clearError());
  } else {
    dispatch(setError('login', 'Invalid username or password!'));
  }
};

const logoutAction = () => (dispatch: AppDispatch) => {
  dispatch(setCurrentUserAction('guest'));
  dispatch(clearError());
};

const signupAction = (signupData: SignupData) => (dispatch: AppDispatch) => {
  dispatch(setCurrentUserAction('student'));
};

const setCurrentUserAction =
  (userType: string | undefined) => (dispatch: AppDispatch) => {
    dispatch({ type: SET_CURRENT_USER, payload: userType });
  };

export { loginAction, logoutAction, signupAction };
