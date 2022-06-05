import React from 'react';
import LogoSearch from '../logosearch/LogoSearch';
import ProfileCard from '../profilecard/ProfileCard';
import FollowersCard from '../followersCard/FollowersCard';
class ProfileSide extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Kamal"
        }
        // this.handleClick=this.handleClick.bind(this);
    }
    handleClick(name){
        this.setState((prevState)=>({
            name:name
        }));
    }
    render(){
        return(
        <div >
           <LogoSearch/>
           <ProfileCard/>
           <FollowersCard/>
        </div>
        )
    }
}
export default ProfileSide;