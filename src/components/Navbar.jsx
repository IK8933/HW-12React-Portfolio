import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
    const location = useLocation();
    const [clickedPath, setClickedPath] = useState(null);
    const [phase, setPhase] = useState(0); // 0 = normal, 1 = fade out, 2 = slide, 3 = fade in

    const baseLinks = [
        { path: '/', label: 'Home' },
        { path: '/About', label: 'About Me' },
        { path: '/Portfolio', label: 'Portfolio' },
        { path: '/Contact', label: 'Contact' },
        { path: '/Resume', label: 'Resume' },
    ];

    // Reorder so clicked (or active) tab is first in phase 3
    const sortedLinks = [...baseLinks].sort((a) =>
        (a.path === clickedPath || a.path === location.pathname) ? -1 : 1
    );

    // When a link is clicked, start the animation
    const handleClick = (path) => {
        if (path !== location.pathname) {
            setClickedPath(path);
            setPhase(1); // Start fade out
        }
    };

    // Control animation phases in order with delays
    useEffect(() => {
        let timeout;
        if (phase === 1) {
            timeout = setTimeout(() => setPhase(2), 800); // Fade-out complete, now slide
        } else if (phase === 2) {
            timeout = setTimeout(() => setPhase(3), 800); // Slide complete, now fade back in
        } else if (phase === 3) {
            timeout = setTimeout(() => {
                setPhase(0);      // Reset
                setClickedPath(null);
            }, 800); // Fade-in complete
        }
        return () => clearTimeout(timeout);
    }, [phase]);

return (
    <nav className="bg-gray-500 dark:bg-gray-800 p-4 shadow-md flex justify-between items-center" aria-label="Main navigation">
        <ul className="flex justify-center space-x-6 overflow-hidden">
            <AnimatePresence>
                {(phase === 1 ? baseLinks : sortedLinks).map(({ path, label }) => {
                    const isClicked = path === clickedPath;
                    const isFadingOut = phase === 1 && !isClicked;
                    const isSlidingIn = phase === 2 && isClicked;
                    const isFadingIn = phase === 3;

                    // PHASE 2: Only show clicked tab
                    if (phase === 2 && !isClicked) return null;

                    const animateProps = () => {
                        if (isFadingOut) {
                            return { opacity: 0 };
                        }
                        if (isSlidingIn) {
                            return { x: -200, opacity: 1 };
                        }
                        if (isFadingIn || phase === 0) {
                            return { x: 0, opacity: 1 };
                        }
                        return { opacity: 1 };
                    };

                    return (
                        <motion.li
                            key={path}
                            className="relative"
                            initial={{ opacity: 1 }}
                            animate={animateProps()}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                        >
                            <NavLink
                                to={path}
                                onClick={() => handleClick(path)}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-600 font-bold'
                                        : 'text-gray-300 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300'
                                }
                            >
                                {label}
                            </NavLink>
                        </motion.li>
                    );
                })}
            </AnimatePresence>
        </ul>

            <button
                onClick={toggleTheme}
                className="bg-gray-800 dark:bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-800"
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