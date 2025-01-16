import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Navbar = () => {
    // URL Path
    const currentPage = window.location.pathname;

    return (
        <nav id="Navbar" className="Navbar-section">
        
            <ul>
                <li className="nav-item">
                    <Link to="/About"className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>Aboutme</Link></li>
                <li className="nav-item">
                    <Link to="/Contact"className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link></li>    
                <li className="nav-item">
                    <Link to="/"className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link></li>
                <li className="nav-item">
                    <Link to="/Portfolio"className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link></li>
                <li className="nav-item">
                    <Link to = "/Resume"className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;