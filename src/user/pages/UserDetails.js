import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsersData } from '@/src/user/store/usersSlice'
import { Link } from 'react-router-dom'
import LoadingSpinner from '@/src/shared/LoadingSpinner/LoadingSpinner'
import './UserDetails.css'

const UserDetails = () => {
  const { data: users, loading } = useSelector(selectUsersData) || []
  return (
    <>
      <div className='user-directory'>
        <h1>Directory</h1>
        {loading ||loading == null ? <LoadingSpinner/> : 
          (
            <>
              {
                users.map((user)=>
                  (
                    <Link
                      key={user.id}
                      className='user-link'
                      to={`/user/${user.id}`} 
                    >
                      <div 
                        className='user-data'
                      >
                        <div>
                          Name: { user.name }
                        </div>
                        <div className='post-count'>
                          Posts count: {user.postsCount ? user.postsCount : '-'}
                        </div>
                      </div>
                    </Link>
                  )
                )
              }
            </>
          )
        }
      </div>
    </>
  )
}
  
export default UserDetails