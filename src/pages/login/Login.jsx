import "./login.css";
import { motion } from 'framer-motion';

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password..." />
                <motion.button
                    className="loginButton"
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