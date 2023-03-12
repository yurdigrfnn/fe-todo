import { configureStore } from '@reduxjs/toolkit';
import loginAuthReducer from '../features/auth/authSlice';
export const store = configureStore({
  reducer: {
    auth : loginAuthReducer,
  },
});
