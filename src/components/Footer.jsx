const Footer = () => {
    return (
        <footer className="bg-gray-500 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 text-center">
            <div className="flex justify-center space-x-6">
                <a
                    href="https://github.com/IK8933"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 dark:hover:text-blue-300"
                    aria-label="GitHub"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/ian-kessack-68b35887/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 dark:hover:text-blue-300"
                    aria-label="LinkedIn"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:iankessack1989@gmail.com"
                    className="hover:text-blue-700 dark:hover:text-blue-300"
                    aria-label="Email"
                >
                    Email
                </a>
            </div>
            <p className="mt-4 text-sm">&copy; 2025 Ian Kessack. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;