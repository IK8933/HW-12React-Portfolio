const Portfolio = () => {
    return (
        <section id="portfolio" className="p-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-center">Welcome to My Portfolio</h1>
            <h2 className="text-2xl font-bold mb-4">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white shadow p-4 rounded">
                    <h3 className="text-lg font-semibold">Project 1</h3>
                    <p>A brief description of Project 1.</p>
                </div>
                <div className="bg-white shadow p-4 rounded">
                    <h3 className="text-lg font-semibold">Project 2</h3>
                    <p>A brief description of Project 2.</p>
                </div>
                <div className="bg-white shadow p-4 rounded">
                    <h3 className="text-lg font-semibold">Project 3</h3>
                    <p>A brief description of Project 3.</p>
                </div>
                <div className="bg-white shadow p-4 rounded">
                    <h3 className="text-lg font-semibold">Project 4</h3>
                    <p>A brief description of Project 4.</p>
                </div>
                  {/* Add more projects as needed */}
            </div>
        </section>
    );
};

export default Portfolio; 