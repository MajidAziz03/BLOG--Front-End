import React, { useEffect } from 'react'
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div data-aos='fade-down' className="header">
                <div className="headerTitle">
                    <span className='.headerTitleSm'>React & Node</span>
                    <span className='headerTitleLg'>Blog</span>
                </div>
                <img
                    src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="" />
            </div>
        </>
    )
}

export default Header;