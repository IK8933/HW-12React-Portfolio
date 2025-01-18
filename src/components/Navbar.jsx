import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-indigo-500 p-4 shadow-md" aria-label="Main navigation">
            <ul className="flex justify-center space-x-6">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        className={({ isActive }) => 
                            isActive 
                                ? 'text-blue-600 font-bold' 
                                : 'text-gray-700 hover:text-blue-500'
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/About"
                        className={({ isActive }) => 
                            isActive 
                                ? 'text-blue-600 font-bold' 
                                : 'text-gray-700 hover:text-blue-500'
                        }
                    >
                        About Me
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/Portfolio"
                        className={({ isActive }) => 
                            isActive 
                                ? 'text-blue-600 font-bold' 
                                : 'text-gray-700 hover:text-blue-500'
                        }
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/Contact"
                        className={({ isActive }) => 
                            isActive 
                                ? 'text-blue-600 font-bold' 
                                : 'text-gray-700 hover:text-blue-500'
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/Resume"
                        className={({ isActive }) => 
                            isActive 
                                ? 'text-blue-600 font-bold' 
                                : 'text-gray-700 hover:text-blue-500'
                        }
                    >
                        Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;