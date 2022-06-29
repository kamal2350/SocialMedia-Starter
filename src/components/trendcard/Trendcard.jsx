import React from 'react'
import './trendcard.css';
import {tData} from '../../data/trendData';
const Trendcard = () => {
  return (
   <div className="trendCard">
    <h3>Your Trends</h3>
    {tData.map((item,id)=>{
        return(
            <div className="trend">
                <span >#{item.name}</span>
                <span>{item.share}k shares</span>
            </div>
        )
    })}


   </div>
  )
}

export default Trendcard