import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="bg-green-600 text-white p-8 text-center">
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg">
                Hi, I am Ian Kessack, a passionate developer transitioning from Biomedical Science to Technology. Let us build something amazing together!
            </p>
            <Link
                to="/Portfolio" 
                className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                View My Work
            </Link>
        </section>
    );
};

export default HeroSection;