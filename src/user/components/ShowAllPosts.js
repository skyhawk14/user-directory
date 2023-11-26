import React from 'react'
import ShowSinglePost from './ShowSinglePost'

const ShowAllPosts = ({posts}) => {
  return (
    <div>
        {
            posts ? 
            (
              <div 
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  flexWrap: 'wrap'
                }}
              >
                {posts.map(post => (<ShowSinglePost key={post.id} post={post}/>))}
              </div>
            )
            :'Loading posts' 
        }
    </div>
  )
}

export default ShowAllPosts