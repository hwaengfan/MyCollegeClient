import { PayloadAction } from '@reduxjs/toolkit';
import { SET_ERROR } from '../types/ActionTypes';

const initialState = {
  errorMessage: '',
};

const errorReducer = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default errorReducer;
