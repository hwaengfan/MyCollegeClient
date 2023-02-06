import { PayloadAction } from '@reduxjs/toolkit';
import {
  CLEAR_USER_INFO,
  MODIFY_USER_INFO,
  SET_USER_INFO,
} from '../types/ActionTypes';
import { UserData } from '../types/ReduxTypes';

const initialState: UserData = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  ID: '',
  department: '',
  major: '',
  email: '',
};

const userReducer = (state = initialState, action: PayloadAction<UserData>) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        ID: action.payload.ID,
        department: action.payload.department,
        major: action.payload.major,
        email: action.payload.email,
      };
    case CLEAR_USER_INFO:
      return {
        ...state,
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        ID: '',
        department: '',
        major: '',
        email: '',
      };
    case MODIFY_USER_INFO:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        department: action.payload.department,
        major: action.payload.major,
      };
    default:
      return state;
  }
};

export default userReducer;
