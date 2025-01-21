import HeroSection from './HeroSection';
const Home = () => {
    return (
        
        <div>
            <HeroSection />
                <section className="mt-8 text-center py-8 bg-transparent dark:bg-transparent">
    <h2 className="text-2xl text-blue-900 dark:text-blue-400 font-bold mb-4">Let’s Collaborate!</h2>
    <p className="text-lg mb-6 text-gray-800 dark:text-gray-100">Have a project in mind or just want to connect? Feel free to reach out!</p>
    <a
        href="/contact"
        className="bg-blue-500 hover:bg-blue-700 hover:text-gray-300 text-white py-2 px-4 rounded text-lg"
    >
        Contact Me
    </a>
</section>
        </div>
    );
};

export default Home; 