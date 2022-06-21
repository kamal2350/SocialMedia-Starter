import React from 'react'
import './posts.css';
import { pData } from '../../data/postData';
import Post from '../Post/Post';
const Posts = () => {
  return (
    <div className='Posts'>
        {
            pData.map((post,id)=>{
                return <Post id={id} data={post} />
            })
        }
    </div>
  )
}

export default Posts