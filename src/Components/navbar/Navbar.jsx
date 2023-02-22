import { Facebook, GitHub, Google, Search, Twitter } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
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
                        <li className="links-item">HOME</li>
                        <li className="links-item">ABOUT</li>
                        <li className="links-item">BLOG</li>
                        <li className="links-item">WRITE</li>
                        <li className="links-item">CONTACT</li>
                    </ul>
                </div>
                <div className="right">
                    <div className="right-sect">
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Search />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar