import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  PostReducer  from '../features/counter/postSlice'
import UserReducer from '../features/counter/userSlice';  

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: PostReducer,
    user: UserReducer
  },
});

