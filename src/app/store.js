import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice'
import charactersReducer from '../features/characters/charactersSlice'
export const store = configureStore({
  reducer: {
      product : productReducer,
      characters : charactersReducer

  },
});
