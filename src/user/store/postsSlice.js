import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { API } from "../constants";

const initialState = {
  data: [],
  loading: true
}

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async _ => {
    const response = await fetch(API.POST_DETAILS)
    const data = await response.json()
    return data;
  },
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
  }
});
    
export const selectAllPosts = (state) => state.posts

export const selectPostById = (state, id) => {
  const postsData = Object.groupBy(state.posts.data, ({ userId }) => userId )
  return postsData[Number(id)] || []
}
    