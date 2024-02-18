// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});