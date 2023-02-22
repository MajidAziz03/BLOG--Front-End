import Sidebar from "../../Components/sidebar/Sidebar";
import SinglePost from "../../Components/singlepost/SinglePost";
import "./single.css";

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    );
}