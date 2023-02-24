import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Homepage from './pages/homepage/homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/register/register';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import { motion } from 'framer-motion';

const App = () => {
    const currentUser = false;
    return (
        <Router>
            <Navbar currentUser={currentUser} />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/posts" element={<Homepage />} />
                <Route path="/register" element={
                    <>
                        {currentUser ? <Homepage /> : <Register />}
                    </>
                }
                />
                <Route path="/login" element={
                    <>
                        {currentUser ? <Homepage /> : <Login />}
                    </>
                }
                />
                <Route path="/post/:id" element={<Single />} />
                <Route path="/write" element={
                    <>
                        {currentUser ? <Write /> : <Login />}
                    </>
                }
                />
                <Route path="/settings" element={
                    <>
                        {currentUser ? <Settings /> : <Login />}
                    </>
                }
                />
            </Routes>
        </Router >
    )
}

export default App