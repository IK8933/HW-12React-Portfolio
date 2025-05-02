import HeroSection from './HeroSection';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <HeroSection />

            {/* 🔹 Professional Intro */}
            <section className="text-center py-8 px-4 bg-transparent dark:bg-transparent">
                <p className="text-lg text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
                I&apos;m Ian Kessack &mdash; a full-stack developer with a background in biomedical science and a passion for crafting responsive, engaging web experiences. I build apps that solve real problems, with clean code and sharp UI.
                </p>
            </section>

            {/* 🔹 Highlight Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto text-left mt-4">
                <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded shadow-md">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Tech Stack</h3>
                    <p className="text-sm text-gray-800 dark:text-gray-200">React, Tailwind CSS, Node.js, Express, MongoDB, GraphQL</p>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded shadow-md">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Experience</h3>
                    <p className="text-sm text-gray-800 dark:text-gray-200">8 years in medicine, now delivering professional-grade web applications with a scientific mindset.</p>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded shadow-md">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Projects</h3>
                    <p className="text-sm text-gray-800 dark:text-gray-200">Grid-Venture, Glimmer, Jumper, and more. Clean UIs, strong logic, and real-world value.</p>
                </div>
            </section>

            {/* 🔹 Let’s Collaborate Section */}
            <section className="mt-12 text-center py-8 bg-transparent dark:bg-transparent">
                <h2 className="text-2xl text-blue-900 dark:text-blue-400 font-bold mb-4">
                    Let’s Collaborate!
                </h2>
                <p className="text-lg mb-6 text-gray-800 dark:text-gray-100">
                    Looking for a developer who brings both creativity and precision? I’d love to help bring your next project to life.
                </p>
                <Link
                    to="/contact"
                    className="bg-blue-500 hover:bg-blue-700 hover:text-gray-300 text-white py-2 px-6 rounded text-lg transition duration-300"
                >
                    Contact Me
                </Link>
            </section>
        </div>
    );
};

export default Home;