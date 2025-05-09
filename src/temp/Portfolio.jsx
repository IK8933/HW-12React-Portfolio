import image1 from '../assets/readmeimg.webp';
import image2 from '../assets/Jumperimg.webp';
import image3 from '../assets/vehiclebuilderimg.webp';
import image4 from '../assets/employeetrackerimg.webp';
import image5 from '../assets/weathertrackerimg.webp';
import image6 from '../assets/Grid-Venture-portfolio img.png';
import image7 from '../assets/Wordle-portfolio-img.png';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


const projects = [
    {
        id: 1,
        title: "ReadMe Generator",
        description: "Readme Generator is a command-line application designed to streamline the creation of professional and structured README files for projects. Using Node.js and Inquirer.js, the tool collects user input for key sections such as project title, description, installation instructions, usage details, and license information. The application then dynamically generates a well-formatted Markdown file, ensuring consistency and saving time for developers. This project demonstrates proficiency in JavaScript, modular programming, and user-friendly CLI design.",
        image: image1, // Imported image
        github: "https://github.com/IK8933/HW5ReadMEGen.git",
    },
    {
        id: 2,
        title: "Jumper",
        description: "Jumper is an interactive and engaging platformer game designed as a collaborative project. The game challenges players to navigate a character through a series of obstacles, showcasing logic, creativity, and seamless user interaction. Developed in collaboration with other team members, Jumper emphasizes teamwork, problem-solving, and attention to detail. The project demonstrates proficiency in JavaScript for game mechanics, CSS for styling, and efficient event handling to create an enjoyable gaming experience.",
        image: image2, // Imported image
        github: "https://github.com/rvrutan/jumper.git",
        Website: "https://main.d2udk01zvq4b82.amplifyapp.com"
    },
    {
        id: 3,
        title: "Vehicle Builder",
        description: "Vehicle Builder is a command-line application designed to simulate the creation and customization of different types of vehicles, including cars, trucks, and motorbikes. This project demonstrates the use of Object-Oriented Programming (OOP) principles in TypeScript, allowing users to interactively configure vehicles by choosing features like wheels, speed, and unique abilities (e.g., towing for trucks or wheelies for motorbikes).",
        image: image3, // Imported image
        github: "https://github.com/IK8933/hw6VehicleBuilder.git",
    },
    {
        id: 4,
        title: "Employee Tracker",
        description: "Employee Tracker is a command-line application designed to manage a company's employee database efficiently. Built using Node.js, Inquirer.js, and MySQL, the tool allows users to add, view, update, and manage employee records, roles, and departments. This project demonstrates strong backend development skills, showcasing proficiency in database management, SQL queries, and modular code organization. It’s a practical solution for streamlining HR and administrative tasks.",
        image: image4, // Imported image
        github: "https://github.com/IK8933/HW8Employee-Tracker.git",
    },
    {
        id: 5,
        title: "Weather Tracker",
        description: "Weather Tracker is a dynamic web application that provides real-time weather information for user-specified locations. Using the OpenWeather API, the app displays current conditions, a 5-day forecast, and key metrics like temperature, humidity, and wind speed. Built with JavaScript, HTML, and CSS, the project showcases skills in API integration, responsive design, and user interaction. Its intuitive interface makes it a valuable tool for planning and staying informed about weather conditions.",
        image: image5, // Imported image
        github: "https://github.com/IK8933/HW7WeatherDashboard.git",
    },  
    {
        id: 6,
        title: "Grid_Venture",
        description: "Grid-Venture is a tile-based puzzle adventure game featuring fog-of-war exploration and item-triggered events. Players explore, gather tools, and solve map-based puzzles while interacting with NPCs. Developed with React, Node.js, MongoDB, Tailwind CSS, and deployed on AWS Amplify.",
        image: image6, // Adjusted to a unique image if available
        github: "https://github.com/IK8933/Grid-VentureApp.git",
        Website: "https://main.d3di6mrkoy0u21.amplifyapp.com"
    },
    {
        id: 7,
        title: "Wordle Clone",
        description: "A browser-based clone of the popular Wordle game, featuring randomized daily word selection from a valid word list, input validation, and styled feedback tiles for accuracy (correct, present, absent). Built with JavaScript, HTML, CSS, and Tailwind CSS, the game offers a responsive UI and includes automated test coverage with GitHub Actions. Deployed using AWS Amplify.",
        image: image7,
        github: "https://github.com/IK8933/wordle_project.git",
        Website: "https://main.d22ryjodg59ixx.amplifyapp.com"
    }

];

const Portfolio = () => {
    return (
        <section 
        id="portfolio" 
        className="p-8 bg-portfolio-bg bg-cover bg-center text-gray-900">

<motion.h1
    className="text-3xl font-bold mb-6 text-center"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
>
    Welcome to My Project Page
</motion.h1>

<motion.h2
    className="text-2xl font-bold mb-4"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
>
    My Projects
</motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <motion.div
                    key={project.id}
                    className="bg-white/80 backdrop-blur-md shadow-xl p-4 rounded-lg border border-gray-200"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.0, delay: project.id * 0.1 }}
                >                  
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-80 object-cover object-top rounded mb-4"

                        />

                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-4">
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 transition-transform duration-200 hover:scale-105">
                            <FaGithub /> GitHub
                        </a>


                            {project.Website && (
                            <a 
                            href={project.Website} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 transition-transform duration-200 hover:scale-105"
                        >
                            <FaExternalLinkAlt /> Live Site
                        </a>
                        
                            )}
                            </div>

                            </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;


































// import image1 from '../assets/readmeimg.webp';
// import image2 from '../assets/Jumperimg.webp';
// import image3 from '../assets/vehiclebuilderimg.webp';
// import image4 from '../assets/employeetrackerimg.webp';
// import image5 from '../assets/weathertrackerimg.webp';
// import image6 from '../assets/Grid-Venture-portfolio img.png';
// import image7 from '../assets/Wordle-portfolio-img.png';


// const projects = [
//     {
//         id: 1,
//         title: "ReadMe Generator",
//         description: "Readme Generator is a command-line application designed to streamline the creation of professional and structured README files for projects. Using Node.js and Inquirer.js, the tool collects user input for key sections such as project title, description, installation instructions, usage details, and license information. The application then dynamically generates a well-formatted Markdown file, ensuring consistency and saving time for developers. This project demonstrates proficiency in JavaScript, modular programming, and user-friendly CLI design.",
//         image: image1, // Imported image
//         github: "https://github.com/IK8933/HW5ReadMEGen.git",
//     },
//     {
//         id: 2,
//         title: "Jumper",
//         description: "Jumper is an interactive and engaging platformer game designed as a collaborative project. The game challenges players to navigate a character through a series of obstacles, showcasing logic, creativity, and seamless user interaction. Developed in collaboration with other team members, Jumper emphasizes teamwork, problem-solving, and attention to detail. The project demonstrates proficiency in JavaScript for game mechanics, CSS for styling, and efficient event handling to create an enjoyable gaming experience.",
//         image: image2, // Imported image
//         github: "https://github.com/rvrutan/jumper.git",
//         Website: "https://main.d2udk01zvq4b82.amplifyapp.com"
//     },
//     {
//         id: 3,
//         title: "Vehicle Builder",
//         description: "Vehicle Builder is a command-line application designed to simulate the creation and customization of different types of vehicles, including cars, trucks, and motorbikes. This project demonstrates the use of Object-Oriented Programming (OOP) principles in TypeScript, allowing users to interactively configure vehicles by choosing features like wheels, speed, and unique abilities (e.g., towing for trucks or wheelies for motorbikes).",
//         image: image3, // Imported image
//         github: "https://github.com/IK8933/hw6VehicleBuilder.git",
//     },
//     {
//         id: 4,
//         title: "Employee Tracker",
//         description: "Employee Tracker is a command-line application designed to manage a company's employee database efficiently. Built using Node.js, Inquirer.js, and MySQL, the tool allows users to add, view, update, and manage employee records, roles, and departments. This project demonstrates strong backend development skills, showcasing proficiency in database management, SQL queries, and modular code organization. It’s a practical solution for streamlining HR and administrative tasks.",
//         image: image4, // Imported image
//         github: "https://github.com/IK8933/HW8Employee-Tracker.git",
//     },
//     {
//         id: 5,
//         title: "Weather Tracker",
//         description: "Weather Tracker is a dynamic web application that provides real-time weather information for user-specified locations. Using the OpenWeather API, the app displays current conditions, a 5-day forecast, and key metrics like temperature, humidity, and wind speed. Built with JavaScript, HTML, and CSS, the project showcases skills in API integration, responsive design, and user interaction. Its intuitive interface makes it a valuable tool for planning and staying informed about weather conditions.",
//         image: image5, // Imported image
//         github: "https://github.com/IK8933/HW7WeatherDashboard.git",
//     },  
//     {
//         id: 6,
//         title: "Grid_Venture",
//         description: "Grid-Venture is a tile-based puzzle adventure game featuring fog-of-war exploration and item-triggered events. Players explore, gather tools, and solve map-based puzzles while interacting with NPCs. Developed with React, Node.js, MongoDB, Tailwind CSS, and deployed on AWS Amplify.",
//         image: image6, // Adjusted to a unique image if available
//         github: "https://github.com/IK8933/Grid-VentureApp.git",
//         Website: "https://main.d3di6mrkoy0u21.amplifyapp.com"
//     },
//     {
//         id: 7,
//         title: "Wordle Clone",
//         description: "A browser-based clone of the popular Wordle game, featuring randomized daily word selection from a valid word list, input validation, and styled feedback tiles for accuracy (correct, present, absent). Built with JavaScript, HTML, CSS, and Tailwind CSS, the game offers a responsive UI and includes automated test coverage with GitHub Actions. Deployed using AWS Amplify.",
//         image: image7,
//         github: "https://github.com/IK8933/wordle_project.git",
//         Website: "https://main.d22ryjodg59ixx.amplifyapp.com"
//     }

// ];

// const Portfolio = () => {
//     return (
//         <section 
//         id="portfolio" 
//         className="p-8 bg-portfolio-bg bg-cover bg-center text-gray-900">

//             <h1 className="text-3xl font-bold mb-6 text-center">Welcome to My Project Page</h1>
//             <h2 className="text-2xl font-bold mb-4">My Projects</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projects.map((project) => (
//                     <div key={project.id} className="bg-white shadow-lg p-4 rounded">
//                         <img 
//                             src={project.image} 
//                             alt={project.title} 
//                             className="w-full h-80 object-cover object-top rounded mb-4"

//                         />

//                         <h3 className="text-lg font-semibold">{project.title}</h3>
//                         <p>{project.description}</p>
//                         <div className="mt-4 flex flex-wrap gap-4">
//                             <a 
//                                 href={project.github} 
//                                 target="_blank" 
//                                 rel="noopener noreferrer" 
//                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                             >
//                             View on GitHub
//                             </a>

//                             {project.Website && (
//                             <a 
//                                 href={project.Website} 
//                                 target="_blank" 
//                                 rel="noopener noreferrer" 
//                                 className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                             >
//                             Live Site
//                             </a>
//                             )}
//                             </div>

//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Portfolio;
