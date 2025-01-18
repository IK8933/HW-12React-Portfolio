import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-600 text-white py-4 text-center">
            <div className="flex justify-center space-x-6">
                <a
                    href="https://github.com/IK8933"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                    aria-label="GitHub"
                >
                    <FaGithub size={24} />
                </a>
                <a
                    href="https://linkedin.com/in/ian-kessack-68b35887/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="mailto:iankessack1989@gmail.com"
                    className="hover:text-blue-500"
                    aria-label="Email"
                >
                    <FaEnvelope size={24} />
                </a>
            </div>
            <p className="mt-4 text-sm">&copy; 2025 Ian Kessack. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
