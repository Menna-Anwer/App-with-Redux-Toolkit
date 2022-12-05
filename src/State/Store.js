import { configureStore } from '@reduxjs/toolkit'
import posts from './Slices/postSlice';
import auth from './Slices/authSlice';

export const store = configureStore({
  reducer: { posts , auth},
})