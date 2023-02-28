import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "./register.css"
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/auth/register/', {
                username,
                email,
                password
            }
            )
            toast.success("Registered Successfully")
            history('/login')
        } catch (error) {
            toast.error("Something went wrong")
        }
    }


    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Enter your username..."
                    className="registerInput"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="text"
                    placeholder="Enter your email..."
                    className="registerInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password..."
                    className="registerInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="registerButton">
                    Register
                </button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}


export default Register;