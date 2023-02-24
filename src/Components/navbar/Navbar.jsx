import { Facebook, GitHub, Google, Search, Twitter } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ currentUser }) => {

    return (
        <>
            <div className="navbar">
                <div className="left">
                    <div className="holder-left">
                        <Facebook className='icons' />
                        <Twitter className='icons' />
                        <GitHub className='icons' />
                        <Google className='icons' />
                    </div>
                </div>
                <div className="middle">
                    <ul className="nav-links">
                        <Link to={'/'} style={{ textDecoration: "none", color: "inherit" }}><li className="links-item">HOME</li></Link>
                        <li className="links-item">ABOUT</li>
                        <li className="links-item">BLOG</li>
                        <Link style={{ textDecoration: "none", color: "inherit" }} to='/write'><li className="links-item">WRITE</li></Link>
                        {
                            currentUser
                                ?
                                <li className="links-item">LOGOUT</li>
                                :
                                null
                        }
                    </ul>
                </div>
                <div className="right">
                    <div className="right-sect">
                        {
                            currentUser ?
                                (
                                    <>

                                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                        <Search />
                                    </>
                                )
                                :
                                (
                                    <>
                                        <Link to='/login' style={{ textDecoration: "none" }}> <span className="links-item"> Login </span> </Link>
                                        <Link to='/register' style={{ textDecoration: "none" }} > <span className="links-item"> Register </span> </Link>
                                    </>
                                )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar