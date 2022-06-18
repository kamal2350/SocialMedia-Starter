import React from 'react';
import './sharepost.css';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Profile from '../../img/profileImg.jpg';
import { Schedule, ScheduleOutlined } from '@mui/icons-material';
const SharePost = () => {
  return (
    <div className="sharepost">
      <img src={Profile} alt="profile_pic"/>
      <div className='inputs'>
        <input type="text" placeholder="What's going on ?"/>
        <div className='postOptions'>
          <div className="option" style={{color:'blue'}}>
          <ImageIcon color='primary'/>
            <span>Image</span>
          </div>
          <div className="option" style={{color:'violet'}}>
          <VideocamIcon />
            <span>Video</span>
          </div>
          <div className="option" style={{color:'cyan'}}>
          <LocationOnIcon />
            <span>Location</span>
          </div>
          <div className="option" style={{color:'yellowgreen'}}>
            <DateRangeIcon />
            <span>Event</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SharePost