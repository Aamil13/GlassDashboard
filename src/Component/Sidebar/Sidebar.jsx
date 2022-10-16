import React, { useState } from 'react'
import logo from "../../Images/logo.png"
import "./Sidebar.scss"
import { motion } from 'framer-motion'
import { SidebarData } from '../../Data'
import LogoutIcon from '@mui/icons-material/Logout';
import ClearIcon from '@mui/icons-material/Clear';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Sidebar = () => {

    const [selected , setSelected] = useState(0);
    const [expanded , setExpanded] = useState(true);

    const sidebarVAriants = {
        true:{
            left: '0'
        },
        false:{
            left: '-60%'
        }
    }
  return (
    <>
    <div className='bars' style={expanded ? {left: "25%"} : {left: "5%"} }>
        {!expanded? <DensityMediumIcon onClick={()=> setExpanded(!expanded)} /> : <ClearIcon onClick={()=> setExpanded(!expanded)}/>} </div>
    <motion.div className='sd'
    variants={sidebarVAriants} 
    animate={window.innerWidth <= 768? `${expanded}` :
    "" }>
        <div className='logo'>
            <img src={logo} alt="" />
            <p>King<span>S</span>weets</p>
        </div>

        <div className='menu'>
            
            {SidebarData.map((item , idx)=>{
                return(
                    <div key={idx} 
                    className={selected === idx ? 'menuitems active' : "menuitems"}
                    onClick = {()=>setSelected(idx)}
                    >
                    <item.icon />
                    <p>{item.heading}</p>
                    </div>
                )
            })}

                <div className='menuitems'>
                <LogoutIcon />
             </div>
             
              

             
        </div>
       
    </motion.div>
    </>
  )
}

export default Sidebar