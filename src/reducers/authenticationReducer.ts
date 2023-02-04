import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  currentUserRole: 'guest',
};

const authenticationReducer = (
  state = initialState,
  action: PayloadAction<string>,
) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUserRole: action.payload,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
