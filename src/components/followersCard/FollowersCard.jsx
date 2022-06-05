import { Button } from '@mui/material';
import React from 'react'
import './followerscard.css'
import {fdata, } from '../../data/followersData';
const FollowersCard = () => {
  console.log(fdata);
    return (

    <div className="followersCard">
        <h3>Who's Following You??</h3>
        {fdata.map((item,_id)=>(
            <div className='follower'>
                <div>
                <img src={item.img} alt="user_img" className="followerImg"/>
                <div className="followerInfo">
                    <span>{item.name}</span>
                    <span>@{item.userName}</span>
                </div>
                </div>
                <button  className='followerBtn'>Follow</button>
            </div>
        ))}
    </div>
  )
}

export default FollowersCard