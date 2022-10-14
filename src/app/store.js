import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  PostReducer  from '../features/counter/postSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: PostReducer,
  },
});

