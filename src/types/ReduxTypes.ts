import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from '../store';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout app instead of `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// authentication actions
export interface loginData {
  username: string;
  password: string;
}

export interface signupData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}
