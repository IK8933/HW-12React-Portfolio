import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="bg-hero-bg bg-cover bg-center p-8 text-center relative">
            <div className="absolute inset-0 bg-black/50"></div>
            <h1 className="text-4xl text-white font-bold drop-shadow-lg relative z-10">Full-Stack Software Developer</h1>
            <p className="text-white text-lg mt-3 relative z-10 mx-auto max-w-2xl">Building practical, responsive web applications with clean interfaces and reliable backend systems.</p>
            <Link
                to="/Portfolio" 
                className="mt-8 inline-block bg-blue-900 hover:bg-blue-700 hover:text-gray-300 text-white font-bold py-2 px-4 rounded relative z-10"
            >
                View My Work
            </Link>
        </section>
    );
};

export default HeroSection;