import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"
import { API } from "../constants";
import { fetchPosts } from "./postsSlice";

const initialState = {
  data: [],
  loading: true
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async _ => {
    const response = await fetch(API.USER_DETAILS)
    const responseData = await response.json()
    return responseData;
  }
);

export const fetchUsersAndPosts = createAsyncThunk(
  'users/fetchUsersAndPosts',
  async (_, { dispatch }) => {
    await dispatch(fetchUsers())
    const postsData = dispatch(fetchPosts())
    return postsData
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
    .addCase(fetchUsersAndPosts.fulfilled, (state, action) => {
      const posts = action.payload.payload
      const userPosts = Object.groupBy(posts, ({ userId }) => userId)
      const newUsersData = current(state).data.map((user)=>({
        ...user,
        postsCount: userPosts[user.id]?.length || 0
      }))
      state.data = newUsersData
    })
  }
});

export const selectUsersData = (state) => state.users
export const selectUserById = (state, id) => {
  return state.users.data.filter(user=>user.id === Number(id))[0] || {}
}