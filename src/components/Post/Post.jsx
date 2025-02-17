import React from 'react'
import './post.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';

const Post = ({data}) => {
  return (
    <div className='post'>
      <img src={data.img} alt={data.name}/>
      <div className="postReact">
        <img src= {data.liked?Heart:NotLike} alt="like"/>
        <img src={Comment} alt="comment"/>
        <img src={Share} alt="share"/>
      </div>
      <span>{data.likes} likes</span>
      <div className="details">
        <span><b>{data.name}</b></span>
        <span>{data.desc}</span>
      </div>

    </div>
  )
}

export default Post