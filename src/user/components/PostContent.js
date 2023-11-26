import React from 'react'
import './PostContent.css'

const PostContent = ({title, body, showOnModal}) => {
  return (
    <div className='post-content'>
      <p className='title'>
        {title.length > 20 && !showOnModal? `${title.substr(0,20)}...` : title} 
      </p>
      <div>
        {body.length > 50  && !showOnModal? `${body.substr(0,50)}...` : body}
      </div>
    </div>
  )
}
  
export default PostContent