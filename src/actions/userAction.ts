import { MODIFY_USER_INFO, SET_USER_INFO } from '../types/ActionTypes';
import { AppDispatch, ModifiedData, UserData } from '../types/ReduxTypes';

const setUserInfoAction = (userData: UserData) => (dispatch: AppDispatch) => {
  dispatch({ type: SET_USER_INFO, payload: userData });
};

const modifyUserAction =
  (modifiedData: ModifiedData) => (dispatch: AppDispatch) => {
    dispatch({ type: MODIFY_USER_INFO, payload: modifiedData });
  };

export { setUserInfoAction, modifyUserAction };
