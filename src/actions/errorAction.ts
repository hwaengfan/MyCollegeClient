import { CLEAR_ERROR, SET_ERROR } from '../types/ActionTypes';
import { AppDispatch } from '../types/ReduxTypes';

const setError =
  (errorType: string, errorMessage: string) => (dispatch: AppDispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: { errorType: errorType, errorMessage: errorMessage },
    });
  };

const clearError = () => (dispatch: AppDispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};

export { setError, clearError };
