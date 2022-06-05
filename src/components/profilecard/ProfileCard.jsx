import React from 'react'
import './profilecard.css'
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
const ProfileCard = () => {
  return (
    <div className='profilecard'>
        <div className="profileImages">
            <img src={Cover} alt="cover"/>
            <img src={Profile} alt="profile"/>
        </div>
        <div className="profileName">
            <span>Kamal</span>
            <span>Senior Frontend Developer</span>
        </div>
        <div className="followstatus">
            <hr />
            <div>
                <div className="follow">
                    <span>190</span>
                    <span>Followers</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>891</span>
                    <span>Following</span>
                </div>
            </div>
            <hr/>
            <span className='myprofile'>MyProfile</span>
        </div>
    </div>
  )
}

export default ProfileCard;