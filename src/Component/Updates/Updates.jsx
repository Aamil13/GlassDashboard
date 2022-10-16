import React from 'react'
import { UpdatesData } from '../../Data'
import "./update.css"

const Updates = () => {
  return (
    <div className='Updates'>
      {UpdatesData.map((item,idx)=>(
        <div key={idx} className='update'>
          <img src={item.img} alt="" />
          <div className='noti'>
            <div style={{padding:"0.7rem"}}>
            <span >{item.name }</span>
            <span>{item.noti}</span>
            </div>
           
            <span>{item.time}</span>
          </div>
          
          
        </div>
      ))}
    </div>
  )
}

export default Updates