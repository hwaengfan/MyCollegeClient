import { PayloadAction } from '@reduxjs/toolkit';
import { CLEAR_ERROR, SET_ERROR } from '../types/ActionTypes';
import { ErrorPayload } from '../types/ReduxTypes';

const initialState = {
  errorType: '',
  errorMessage: '',
};

const errorReducer = (
  state = initialState,
  action: PayloadAction<ErrorPayload>,
) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        errorType: action.payload.errorType,
        errorMessage: action.payload.errorMessage,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        errorType: '',
        errorMessage: '',
      };
    default:
      return state;
  }
};

export default errorReducer;
