import React, { useEffect } from 'react'
import { fetchUsersAndPosts } from '@/src/user/store/usersSlice'
import router from '@/src/user/router'
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const User = () => {
  // Load users and post data
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUsersAndPosts())
  },[])
  return <RouterProvider router={router}/>
}
export default User