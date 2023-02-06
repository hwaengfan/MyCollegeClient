import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from '../store';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout app instead of `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// authentication
export interface LoginData {
  username: string;
  password: string;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

// error
export interface ErrorPayload {
  errorMessage: string;
  errorType: string;
}

// user
export interface UserData {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  ID: string;
  email: string;
  userType?: string;
  department?: string;
  major?: string;
}

export interface ModifiedData {
  currentUser: string;
  username: string;
  currentPassword: string;
  newPassword: string;
  firstName: string;
  lastName: string;
  major?: string;
  department?: string;
}
