import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from './animalsSlice';

// Configure the Redux store with the animals slice
export const store = configureStore({
  reducer: {
    animals: animalsReducer
  }
});

// Define RootState and AppDispatch types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;