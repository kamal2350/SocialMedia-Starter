import React from 'react'
import './rightSide.css';
import Home from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';
import { HomeMaxOutlined, HomeOutlined, Message, NotificationAdd, Settings } from '@mui/icons-material';
import Trendcard from '../trendcard/Trendcard';
const RightSide = () => {
  return (
    <div className='RightSide'>
        <div className="navIcons">
            {/* <img src={Home} alt="home"/> */}
            <HomeOutlined/>
            <Settings/>
            {/* <img src={Noti} alt="notification"/> */}
            <NotificationAdd/>
            {/* <img src={Comment} alt="comment"/> */}
            <Message/>
        </div>
        <Trendcard/>
        <button className="button r-button">
          Share
        </button>
    </div>
  )
}

export default RightSide