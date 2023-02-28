import React, { useContext } from 'react'
import Navbar from './Components/navbar/Navbar'
import Homepage from './pages/homepage/homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/register/register';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import { motion } from 'framer-motion';
import { Context } from './context/context';
// import NavbarStrap from './Components/navbarStrap/NavbarStrap';

const App = () => {
    const { user } = useContext(Context)
    return (
        <Router>
            <Navbar />
            {/* <NavbarStrap /> */}
            <Routes>
                <Route path="/" element={user ? <Homepage /> : <Login />} />
                <Route path="/posts" element={<Homepage />} />
                <Route path="/register" element={
                    <>
                        {user ? <Homepage /> : <Register />}
                    </>
                }
                />
                <Route path="/login" element={
                    <>
                        {user ? <Homepage /> : <Login />}
                    </>
                }
                />
                <Route path="/post/:id" element={<Single />} />
                <Route path="/write" element={
                    <>
                        {user ? <Write text="You must Login in first" /> : <Login text="You must Login in first" />}
                    </>
                }
                />
                <Route path="/settings" element={
                    <>
                        {user ? <Settings /> : <Login />}
                    </>
                }
                />
            </Routes>
        </Router >
    )
}

export default App