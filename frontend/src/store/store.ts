import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from './animalsSlice';

export const store = configureStore({
  reducer: {
    animals: animalsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;