import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { toast } from 'react-toastify';
import "./Home.css"

function Home() {

    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3001/home')
            .then(result => {
                console.log(result)
                if (result.data !== "Successful") {
                    navigate("/login")
                } else {
                    navigate("/home")
                }

            })
            .catch(err => console.log(err))
    }, [])

    // const handleLogout = () => {
    //     axios.get("http://localhost:3001/logout")
    //         .then(result => {
    //             if (result.data === "Logout Successful!") {
    //                 toast.success(result.data)
    //                 navigate("/login")
    //             }
    //         })
    // }

    return (
        <>
            <Navbar />
            <div className='home-bg'>
                <div className='text-center left'>
                    <img className='hanelytics-offerings' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1729246985/AI_ML_gufrzz.jpg' alt=""/>
                    <img className='hanelytics-offerings' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1729249523/AI_ML_2_y3cnd2.png' alt=""/>
                    <img className='hanelytics-offerings' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1729249523/AI_ML_3_y35wtq.png' alt=""/>
                    <img className='hanelytics-offerings' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1729249523/AI_ML_4_hydxb3.png' alt=""/>
                    <img className='hanelytics-offerings' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1729249885/AI_ML_5_ywk8tp.png' alt=""/>
                    <img className='hanelytics-offerings' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1729250358/AI_ML_6_jt0tjj.png' alt=""/>
                    <img className='hanelytics-offerings' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1729250469/AI_ML_7_v4emvv.png' alt=""/>
                    <img className='hanelytics-offerings' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1729250746/AI_ML_8_h8eyby.png' alt=""/>
                    <img className='hanelytics-offerings' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1729250849/AI_ML_9_exwf1v.png' alt=""/>
                    <img className='hanelytics-offerings' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1729250943/AI_ML_10_kupfkm.png' alt=""/>
                    <img className='hanelytics-offerings' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1729251199/AI_ML_11_uiynog.png' alt=""/>
                    <img className='hanelytics-offerings' src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1729251337/AI_ML_12_gfdjxi.png' alt=""/>
                    
                    
                </div>
                <div className='right'>
                    <h1 className="simplify-heading">
                        Simplify AI/ML predictions effortlessly with Hanelytics.
                    </h1>
                    <Link to="/dataModeling" style={{textDecoration: "none"}}>
                        <button className='button'>
                            Start Working With Data Models
                        </button>
                    </Link>
                    <b>*Click here to start working with Data Models</b>
                    {/* <Link to="/login">
                        <button className='text-decoration-none text-danger bg-warning rounded-4 border-none p-3'
                            style={{ fontWeight: 700}}
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </Link> */}
                </div>
            </div >
        </>
    )
}

export default Home
