import React from 'react'
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='navbar-container'>
            <div className='contacts'>
                <div className='contact-details'>
                    <FaSquarePhone className='icon' />
                    <p>(855) 542 6392</p>
                    <p>|</p>
                </div>
                <div className='email-info'>
                    <MdEmail className='email-icon' />
                    <p>demo@hanelytics.com</p>
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
                        <FaGlobe className='icon' />
                        <p>English</p>
                        <p>|</p>
                    </div>
                    <div className='country'>
                        <FaMapMarkerAlt className='icon' />
                        <select className='selected-country'>
                            <option className='option' value="USA" selected>United States</option>
                            <option value="India">India</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="UAE">UAE</option>
                        </select>
                        <p>|</p>
                    </div>
                </div>
                <div className='signup-register'>
                    <Link to="/">
                        <button className='home'>Home</button>
                    </Link>
                    <Link to="/register">
                        <button className='signup'>Sign up</button>
                    </Link>
                    <Link to="/login">
                        <button id='login'>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
