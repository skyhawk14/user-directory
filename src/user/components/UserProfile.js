import React from 'react'
import './UserProfile.css'

const UserProfile = ({user}) => {
  if(Object.keys(user).length === 0) {
    return null
  }
  const {name, username, address, company, email, phone} = user
  return (
    <>
      <h1 className='profile-page'>Profile Page</h1>
      <div className='profile-container'>
        <div className='profile-left-container'>
          <p>{name}</p>
          <p>
            <span>{username}</span>|
            <span>{company.catchPhrase}</span>
          </p>
        </div>
        <div className='profile-right-container'>
          <p>{address.suite}, {address.street}, {address.city}, {address.zipcode}</p>
          <p className='profile-info'>
            {email}|{phone}
          </p>
        </div>
      </div>
    </>
  )
}
  
export default UserProfile