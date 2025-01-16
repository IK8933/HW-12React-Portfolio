import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <nav className="bg-green-600 p-4 shadow-md" aria-label="Main navigation">
            <ul className="flex justify-center space-x-6">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={`${
                            currentPage === '/' ? 'text-blue-600 font-bold' : 'text-gray-700'
                        } hover:text-blue-500`}
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/About"
                        className={`${
                            currentPage === '/About' ? 'text-blue-600 font-bold' : 'text-gray-700'
                        } hover:text-blue-500`}
                    >
                        About me
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/Contact"
                        className={`${
                            currentPage === '/Contact' ? 'text-blue-600 font-bold' : 'text-gray-700'
                        } hover:text-blue-500`}
                    >
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/Portfolio"
                        className={`${
                            currentPage === '/Portfolio' ? 'text-blue-600 font-bold' : 'text-gray-700'
                        } hover:text-blue-500`}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/Resume"
                        className={`${
                            currentPage === '/Resume' ? 'text-blue-600 font-bold' : 'text-gray-700'
                        } hover:text-blue-500`}
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;