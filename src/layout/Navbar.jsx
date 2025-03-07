import React from 'react'
import "../layout/nav.css"
import logo from '../assets/Images/AK.png'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { GrContactInfo } from 'react-icons/gr'
import { AiOutlineMessage } from 'react-icons/ai'
import { GrCode } from "react-icons/gr";
// import { FiArrowUpCircle } from "react-icons/fi";

export default function Navbar() {
    
    return (
        <div>
           <div className="fixed top-0 left-0  z-50 ">
                <img src={logo} alt="logo" className="w-24 h-auto cursor-pointer" />
            </div>
            <nav>
                <a href="#home" data-tooltip="Home"><AiOutlineHome /></a>
                <a href="#about" data-tooltip="About"><AiOutlineUser /></a>
                <a href="#skills" data-tooltip="Skills"><GrContactInfo /></a>
                <a href="#project" data-tooltip="Project"><GrCode /></a>
                <a href="#contact" data-tooltip="Contact"><AiOutlineMessage /></a>
            </nav>
            {/* <FiArrowUpCircle className="scroll-up-icon" /> */}
        </div>
    )
}
