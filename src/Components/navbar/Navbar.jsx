import { Facebook, GitHub, Google, Search, Twitter } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { motion } from 'framer-motion'
import { Context } from '../../context/context'
import { toast } from 'react-toastify'

const Navbar = () => {
    const { user, dispatch } = useContext(Context);
    const history = useNavigate()


    const handleLogout = () => {
        dispatch({ type: "USER_LOGOUT" })
        history("/login")
        toast.success('Logout Successfully')
    }



    return (
        <>
            <div className="navbar">
                <div className="left">
                    <motion.div
                        initial={{ x: "-250" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: "120" }}
                        className="holder-left">
                        <Facebook className='icons' />
                        <Twitter className='icons' />
                        <GitHub className='icons' />
                        <Google className='icons' />
                    </motion.div>
                </div>
                <div className="middle">
                    <ul className="nav-links">
                        <Link to={'/'} style={{ textDecoration: "none", color: "inherit" }}><li className="links-item">HOME</li></Link>
                        <li className="links-item">ABOUT</li>
                        <li className="links-item">BLOG</li>
                        <Link style={{ textDecoration: "none", color: "inherit" }} to='/write'><li className="links-item">WRITE</li></Link>
                        {
                            user && <li className="links-item"
                                onClick={handleLogout}
                            >LOGOUT</li>
                        }
                    </ul>
                </div>
                <div className="right">
                    <div className="right-sect">
                        
                        {
                            user ?
                                (
                                    <>
                                        <Avatar alt={user.username} src={user.profilePic} />
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