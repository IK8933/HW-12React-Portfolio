import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="bg-hero-bg bg-cover bg-center p-8 text-center">
            <h1 className="text-4xl text-yellow-0 font-bold">Welcome to My Portfolio</h1>
            <Link
                to="/Portfolio" 
                className="mt-40 inline-block bg-blue-900 hover:bg-blue-700 hover:text-gray-300 text-white font-bold py-2 px-4 rounded"
            >
                View My Work
            </Link>
        </section>
    );
};

export default HeroSection;