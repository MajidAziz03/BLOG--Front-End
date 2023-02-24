import { Link } from "react-router-dom";
import "./post.css";
import { motion } from 'framer-motion'

export default function Post({ img }) {



    return (
        <motion.div
            className="post"
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0.2, duration: 0.2}}
        >
            <Link to="/post/abc" className="link">
                <img
                    className="postImg"
                    src={img}
                    alt=""
                />
            </Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </span>
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                            Life
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </motion.div >
    );
}