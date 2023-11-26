import { configureStore } from '@reduxjs/toolkit';
import { postsSlice } from './postsSlice';
import { usersSlice } from './usersSlice';

export const store = configureStore({
  reducer: { 
      users: usersSlice.reducer,
      posts: postsSlice.reducer
    },
})