import React from 'react'
import Posts from '../posts/Posts';
import SharePost from '../sharepost/SharePost';
import './postside.css';
const PostSide = () => {
  return (
    <div className="postSide">
        <SharePost/>
        <Posts/>  
    </div>
  )
}

export default PostSide