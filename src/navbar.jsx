import React from "react";
import {BsPlusCircleFill,BsLightningFill,} from 'react-icons/bs'
import {FaPoo,FaFire} from 'react-icons/fa'
import "./index.css"
 
export default function Navbar(){
    return(
        <div className="fixed top-0 h-screen w-16
        bg-gray-800 text-white flex flex-col py-2 px-2
       gap-2,
        ">
                <SideBarIcon icon={<FaFire size="28"/> }/>  
                <SideBarIcon icon={<BsPlusCircleFill size="32"/>}/> 
                <SideBarIcon icon={<BsLightningFill size="28"/>}/> 
                <SideBarIcon icon={<FaPoo size="29"/>}/>   
        </div>
    )
}
const SideBarIcon=({icon})=>(
    <div className="sidebar-icon">
        {icon}
    </div>
)

// BsPlusCircle
// BsLightning,BsGearFillBsPlusCircle
