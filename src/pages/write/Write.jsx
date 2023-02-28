import "./write.css";
import { motion } from 'framer-motion'
import AOS from "aos";
import { useEffect } from "react";


const Write = ({ text }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    })
    return (
        <motion.div
            className="write"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1, }}
            transition={{ duration: 1 }}
        >
            <img
                className="writeImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <form className="writeForm">
                <motion.div
                    initial={{ x: "-100vw" }}
                    animate={{
                        x: 0
                    }}
                    transition={{ duration: 1 }}
                    className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input
                        id="fileInput" type="file" style={{ display: "none" }} />
                    <input
                        className="writeInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                    />
                </motion.div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Tell your story..."
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </motion.div>
    );
}


export default Write;