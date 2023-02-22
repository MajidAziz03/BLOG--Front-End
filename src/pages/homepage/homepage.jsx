import React from 'react'
import Header from '../../Components/header/Header'
import Posts from '../../Components/posts/posts'
import Sidebar from '../../Components/sidebar/Sidebar'
import './homepage.css'

const Homepage = () => {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}

export default Homepage