import React from 'react'
import useModal from '../../shared/hooks/useModal'
import Modal from '../../shared/modal/Modal'
import PostContent from './PostContent'
import './ShowSinglePost.css'
const ShowSinglePost = ({post}) => {
  const {title, body} = post
  const { isShowing, toggle } = useModal();
  return (
    <div 
      className='post-container'
      onClick={ toggle }
    >
      <PostContent
        title={title}
        body={body}
        showOnModal={false}
      />
      <Modal
        isShowing={isShowing}
        hide={toggle}
      >
        <PostContent
          title={title}
          body={body}
          showOnModal={true}
        />
      </Modal>
    </div>
    )
  }
  
  export default ShowSinglePost