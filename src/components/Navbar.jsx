import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const Navbar = ({ theme, toggleTheme }) => {
    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/About', label: 'About Me' },
        { path: '/Portfolio', label: 'Portfolio' },
        { path: '/Contact', label: 'Contact' },
        { path: '/Resume', label: 'Resume' },
    ];

    return (
        <nav className="bg-gray-500 dark:bg-gray-800 p-4 shadow-md flex justify-between items-center" aria-label="Main navigation">
            <ul className="flex justify-center space-x-6">
                {navLinks.map(({ path, label }) => (
                    <li key={path} className="nav-item">
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-bold'
                                    : 'text-gray-300 dark:text-gray-500 hover:text-blue-900 dark:hover:text-blue-500'
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <button
                onClick={toggleTheme}
                className="bg-gray-800 dark:bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-500"
            >
                Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </nav>
    );
};

// Add PropTypes validation
Navbar.propTypes = {
    theme: PropTypes.string.isRequired, // `theme` must be a string
    toggleTheme: PropTypes.func.isRequired, // `toggleTheme` must be a function
};

export default Navbar;