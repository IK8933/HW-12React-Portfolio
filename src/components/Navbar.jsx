
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion, LayoutGroup } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
    const location = useLocation();

    const baseLinks = [
        { path: '/', label: 'Home' },
        { path: '/About', label: 'About Me' },
        { path: '/Portfolio', label: 'Projects' },
        { path: '/Contact', label: 'Contact' },
        { path: '/Resume', label: 'Resume' },
    ];

    // 🚩 Move the active page to the first position.
    // All other links maintain their original order.
    const sortedLinks = [...baseLinks].sort((a, b) => {
        const activePath = location.pathname.toLowerCase();

        if (a.path.toLowerCase() === activePath) return -1;
        if (b.path.toLowerCase() === activePath) return 1;

        return 0;
    });

    return (
        <nav
            className="bg-gray-500 dark:bg-[#111827] p-4 shadow-md flex justify-between items-center"
            aria-label="Main navigation"
        >
            {/* Site Name */}
            <div className="font-bold text-xl whitespace-nowrap">
                Ian Kessack
            </div>

            {/* 🚩 Smoothly Rearranging Navigation Links */}
            <LayoutGroup>
                <motion.ul
                    layout
                    className="flex justify-center gap-6"
                >
                    {sortedLinks.map(({ path, label }) => (
                        <motion.li
                            key={path}
                            layout="position"
                            transition={{
                                layout: {
                                    type: 'spring',
                                    stiffness: 220,
                                    damping: 28,
                                    mass: 0.8,
                                },
                            }}
                            className="relative whitespace-nowrap"
                        >
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-600 dark:text-blue-400 font-bold transition-colors duration-200'
                                        : 'text-gray-300 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200'
                                }
                            >
                                {label}
                            </NavLink>
                        </motion.li>
                    ))}
                </motion.ul>
            </LayoutGroup>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="bg-gray-800 dark:bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-slate-500 transition-colors duration-200"
            >
                Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </nav>
    );
};

Navbar.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
