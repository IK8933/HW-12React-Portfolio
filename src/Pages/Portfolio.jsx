const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "A brief description of Project 1.",
        image: "/path-to-your-image1.jpg",
        github: "https://github.com/IK8933/HW5ReadMEGen.git",
    },
    {
        id: 2,
        title: "Project 2",
        description: "A brief description of Project 2.",
        image: "/path-to-your-image2.jpg",
        github: "https://github.com/rvrutan/jumper.git",
    },
    {
        id: 3,
        title: "Project 3",
        description: "A brief description of Project 3.",
        image: "/path-to-your-image3.jpg",
        github: "https://github.com/IK8933/hw6VehicleBuilder.git",
    },
    {
        id: 4,
        title: "Project 4",
        description: "A brief description of Project 4.",
        image: "/path-to-your-image4.jpg",
        github: "https://github.com/IK8933/HW7WeatherDashboard.git",
    },
    {
        id: 5,
        title: "Project 5",
        description: "A brief description of Project 4.",
        image: "/path-to-your-image4.jpg",
        github: "https://github.com/IK8933/HW8Employee-Tracker.git",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="p-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-center">Welcome to My Portfolio</h1>
            <h2 className="text-2xl font-bold mb-4">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white shadow-lg p-4 rounded">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-48 object-cover rounded mb-4"
                        />
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p>{project.description}</p>
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
