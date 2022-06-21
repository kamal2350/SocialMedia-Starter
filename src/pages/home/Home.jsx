import React, { Component, Profiler } from 'react'
import PostSide from '../../components/postside/PostSide';
import ProfileSide from '../../components/profileSide/ProfileSide';
import RightSide from '../../components/rightSide/RightSide';

import './home.css'
class Home extends React.Component{
    render(){
        return(
            <div className='home'>
            <div className="profileSide">
                <ProfileSide/>
            </div>
            <div className="postSide"><PostSide/></div>
            <div className="rightSide"><RightSide/></div>
            </div>
        )
    }
}
export default Home;