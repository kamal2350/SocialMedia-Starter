import React,{useState,useRef} from 'react';
import './sharepost.css';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Profile from '../../img/profileImg.jpg';
import CancelIcon from '@mui/icons-material/Cancel';
import { Schedule, ScheduleOutlined } from '@mui/icons-material';
const SharePost = () => {
  const [image,setImage]=useState(null);
  const imageRef=useRef();

  const onImagechange=(event)=>{
    if(event.target.files && event.target.files[0]){
      let img = event.target.files[0];
      setImage({
        
        image:URL.createObjectURL(img),
      })
    }
  }
  return (
    <div className="sharepost">
      <img src={Profile} alt="profile_pic"/>
      <div className='inputs'>
        <input type="text" placeholder="What's going on ?"/>
        <div className='postOptions'>
          <div className="option" style={{color:'blue'}} onClick={()=>imageRef.current.click()}>
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
          <button className='button ps-button'>Share</button>
          <div style={{display:'none'}}>        
          <input type="file" name='myImage'ref={imageRef} onChange={onImagechange}/>

          </div>
        </div>
        {image && 
        <div className="previewImage">
          <CancelIcon onClick={()=>setImage(null)} />
          <img src={image.image} alt="img" />
        </div> }
      </div>
    </div>
  )
}

export default SharePost