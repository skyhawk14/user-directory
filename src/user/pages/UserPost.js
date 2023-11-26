import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ShowAllPosts from '@/src/user/components/ShowAllPosts'
import { selectPostById } from '@/src/user/store/postsSlice'
import UserPageTopBar from '../components/UserPageTopBar'
import { selectUserById } from '@/src/user/store/usersSlice'
import UserProfile from '../components/UserProfile'

const UserPost = () => {
  const { id } = useParams()
  const posts = useSelector(state=> selectPostById(state,id))
  const user = useSelector(state=> selectUserById(state, id))
  return (
    <div>
      <UserPageTopBar/>
      <UserProfile
        user={user}
      />
      <ShowAllPosts
        posts={posts}
      />
    </div>
  )
}

export default UserPost