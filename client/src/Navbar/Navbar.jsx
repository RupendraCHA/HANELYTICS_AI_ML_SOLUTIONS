import React from 'react'
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='contacts'>
                <div className='contact-details'>
                    <FaSquarePhone className='icon' />
                    <p>Phone Number</p>
                    <p>|</p>
                </div>
                <div className='email-info'>
                    <MdEmail className='email-icon' />
                    <p>Email Address</p>
                    <p>|</p>
                </div>
                <div className='social-icons'>
                    <FaLinkedin className='icons' />
                    <IoLogoYoutube className='icons' />
                    <GrInstagram className='icons' />
                </div>
            </div>
            <div className='login'>
                <div className='country-language'>
                    <div className='language'>
                        <p>Globe</p>
                        <p>English</p>
                        <p>|</p>
                    </div>
                    <div className='country'>
                        <p>Country</p>
                        <p>United States of America</p>
                        <p>|</p>
                    </div>
                </div>
                <div className='buttons'>
                    <button>Sign up</button>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
