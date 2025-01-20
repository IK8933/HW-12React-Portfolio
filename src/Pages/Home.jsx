import HeroSection from './HeroSection';
const Home = () => {
    return (
        
        <div>
            <HeroSection />
            <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4 py-4 text-center">Welcome!</h2>
                <p className="text-lg py-4 text-center">
                    This is the body section where you can provide additional information about yourself or your work.
                </p>
            </section>
        </div>
    );
};

export default Home; 