import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/About', label: 'About Me' },
        { path: '/Portfolio', label: 'Portfolio' },
        { path: '/Contact', label: 'Contact' },
        { path: '/Resume', label: 'Resume' },
    ];

    return (
        <nav className="bg-gray-500 p-4 shadow-md" aria-label="Main navigation">
            <ul className="flex justify-center space-x-6">
                {navLinks.map(({ path, label }) => (
                    <li key={path} className="nav-item">
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-bold'
                                    : 'text-gray-600 hover:text-blue-500'
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
