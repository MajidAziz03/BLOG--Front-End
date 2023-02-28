import "./login.css";
import { motion } from 'framer-motion';
import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

const Login = ({ text }) => {
    const { dispatch } = useContext(Context)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post('http://localhost:5000/auth/login', {
                email,
                password
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            history('/')
            toast.success("Login Successfully")
        } catch (error) {
            toast.error("Wrong Credentials")
        }
    }


    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="loginInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="loginInput" type="password" placeholder="Enter your password..." />
                <motion.button
                    className="loginButton"
                    type="submit"
                    whileHover={{
                        scale: 1.1,
                    }}
                >Login
                </motion.button>
            </form>
            <button
                className="loginRegisterButton"
            >
                Register
            </button>
        </div >
    );
}

export default Login;