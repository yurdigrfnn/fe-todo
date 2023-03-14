import { configureStore } from '@reduxjs/toolkit';
import loginAuthReducer from '../features/auth/authSlice';
import getTodoReducer from '../features/todo/getTodoSlice';
import actionReducer from '../features/todo/actionSlice';
export const store = configureStore({
  reducer: {
    auth : loginAuthReducer,
    getTodo : getTodoReducer,
    action : actionReducer,
  },
});
