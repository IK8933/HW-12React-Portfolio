import {Link} from "react-router-dom" 
import Navbar from "./Header";

function Header () {
    return (
    
    <div>
        <Navbar />
        <Link to="/about">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
    </div>
    
    );
}

export default Header