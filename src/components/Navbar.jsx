// import { NavLink } from 'react-router-dom';
// import { useState } from 'react';

// const Navbar = () => {
//     const [theme, setTheme] = useState("light");

//     const toggleTheme = () => {
//         const newTheme = theme === "light" ? "dark" : "light";
//         setTheme(newTheme);
//         document.documentElement.classList.toggle("dark", newTheme === "dark");
//     };

//     const navLinks = [
//         { path: '/', label: 'Home' },
//         { path: '/About', label: 'About Me' },
//         { path: '/Portfolio', label: 'Portfolio' },
//         { path: '/Contact', label: 'Contact' },
//         { path: '/Resume', label: 'Resume' },
//     ];

//     return (
//         <nav className="bg-gray-500 dark:bg-gray-800 p-4 shadow-md" aria-label="Main navigation">
//             <div className="flex justify-between items-center">
//                 {/* Centered Links */}
//                 <ul className="flex justify-center space-x-9 w-full">
//                     {navLinks.map(({ path, label }) => (
//                         <li key={path} className="nav-item">
//                             <NavLink
//                                 to={path}
//                                 className={({ isActive }) =>
//                                     isActive
//                                         ? 'text-blue-600 font-bold'
//                                         : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
//                                 }
//                             >
//                                 {label}
//                             </NavLink>
//                         </li>
//                     ))}
//                 </ul>
//                 {/* Dark/Light Mode Button */}
//                 <button
//                     onClick={toggleTheme}
//                     className="bg-gray-800 dark:bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700 dark:hover:bg-gray-500 mr-1"
//                 >
//                     Toggle {theme === "light" ? "Dark" : "Light"} Mode
//                 </button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/About', label: 'About Me' },
        { path: '/Portfolio', label: 'Portfolio' },
        { path: '/Contact', label: 'Contact' },
        { path: '/Resume', label: 'Resume' },
    ];

    return (
        <nav className="bg-gray-500 dark:bg-gray-800 p-4 shadow-md flex items-center justify-between" aria-label="Main navigation">
            {/* Navigation Links */}
            <ul className="flex space-x-6">
                {navLinks.map(({ path, label }) => (
                    <li key={path} className="nav-item">
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-bold'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            
            {/* Dark/Light Mode Button */}
            <button
                onClick={toggleTheme}
                className="ml-auto bg-gray-800 dark:bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-500"
            >
                Toggle {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </nav>
    );
};

export default Navbar;