import backgroundImage from '../assets/blue-flowers.jpeg';
import portraitImage from '../assets/class-photo.jpg';

const Aboutme = () => {
    return (
        <main
            id="about"
            className="min-h-screen flex items-center justify-center p-8 bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <section className="flex flex-col md:flex-row-reverse items-start justify-center gap-8 text-center md:text-left max-w-7xl w-full">
                {/* Portrait Photo on Right, Top-Aligned */}
                <img
                    src={portraitImage}
                    alt="Ian Kessack Portrait"
                    className="w-64 h-64 md:w-72 md:h-80 rounded-full shadow-lg object-cover"
                />

                {/* Bio Section */}
                <div className="bg-black bg-opacity-60 p-6 rounded-lg backdrop-blur-sm shadow-xl max-w-4xl text-left">
                    <h2 className="text-4xl text-white font-bold drop-shadow-lg mb-4">About Me</h2>

                    <p className="text-2xl mb-6 text-white drop-shadow-md">
                        Hi, my name is Ian Kessack, a passionate developer transitioning from Biomedical Science into the world of technology.
                        My experience in medicine has equipped me with problem-solving skills that I now apply to coding and software development.
                        The ability to analyze complex scenarios and find innovative solutions has been integral to my career shift,
                        helping me tackle programming challenges with confidence and creativity.
                    </p>

                    <p className="text-2xl mb-6 text-white drop-shadow-md">
                        I specialize in front-end and full-stack web development, with a focus on creating efficient, user-friendly applications.
                        My approach combines a deep understanding of user experience with a commitment to clean, maintainable code. Within this portfolio,
                        I have shared some of the projects I’ve worked on so far, showcasing skills in technologies like JavaScript, React, Node.js, and more.
                    </p>

                    <p className="text-2xl mb-6 text-white drop-shadow-md">
                        In addition to my technical expertise, I bring a detail-oriented mindset developed through years of working in the biomedical field.
                        Managing high-pressure environments taught me how to prioritize tasks, communicate effectively within a team, and adapt to evolving challenges—all of which translate seamlessly into my work as a developer.
                        I thrive in collaborative settings where innovation and problem-solving drive success.
                    </p>

                    <p className="text-2xl mb-6 text-white drop-shadow-md">
                        What excites me most about software development is the opportunity to turn ideas into functional, impactful solutions.
                        Whether it’s designing a dynamic front-end interface or engineering a robust back-end system,
                        I am motivated by the potential to create applications that make people’s lives easier and more productive.
                        I enjoy staying current with industry trends, learning new frameworks, and experimenting with emerging technologies to expand my skill set.
                    </p>

                    <p className="text-2xl mb-6 text-white drop-shadow-md">
                        Beyond coding, I am deeply committed to fostering a positive work culture. I believe that great software is built through open communication,
                        mutual respect, and a shared vision. My unique background gives me a fresh perspective on challenges,
                        and I am eager to bring that enthusiasm to a team that values innovation and creativity. Together,
                        I’m confident we can build software that inspires and empowers users. Let’s connect and build something amazing together!
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Aboutme;





// import backgroundImage from '../assets/blue-flowers.jpeg';
// import portraitImage from '../assets/class-photo.jpg';

// const Aboutme = () => {
//     return (
//         <main
//             id="about"
//             className="p-8 bg-cover bg-center text-center"
//             style={{
//                 backgroundImage: `url(${backgroundImage})`,
//             }}
//         >
//             <section className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
//                 {/* Portrait Photo */}
//                 <img
//                     src={portraitImage}
//                     alt="Ian Kessack Portrait"
//                     className="w-50 h-50 md:w-65 md:h-64 rounded-full shadow-lg object-cover"
//                 />

//                 {/* Bio Section with readable background */}
//                 <div className="bg-black bg-opacity-60 p-6 rounded-lg backdrop-blur-sm shadow-xl max-w-4xl text-left">
//                     <h2 className="text-4xl text-white font-bold drop-shadow-lg mb-4">About Me</h2>

//                     <p className="text-2xl mb-6 text-white drop-shadow-md">
//                         Hi, my name is Ian Kessack, a passionate developer transitioning from Biomedical Science into the world of technology.
//                         My experience in medicine has equipped me with problem-solving skills that I now apply to coding and software development.
//                         The ability to analyze complex scenarios and find innovative solutions has been integral to my career shift,
//                         helping me tackle programming challenges with confidence and creativity.
//                     </p>

//                     <p className="text-2xl mb-6 text-white drop-shadow-md">
//                         I specialize in front-end and full-stack web development, with a focus on creating efficient, user-friendly applications.
//                         My approach combines a deep understanding of user experience with a commitment to clean, maintainable code. Within this portfolio,
//                         I have shared some of the projects I’ve worked on so far, showcasing skills in technologies like JavaScript, React, Node.js, and more.
//                     </p>

//                     <p className="text-2xl mb-6 text-white drop-shadow-md">
//                         In addition to my technical expertise, I bring a detail-oriented mindset developed through years of working in the biomedical field.
//                         Managing high-pressure environments taught me how to prioritize tasks, communicate effectively within a team, and adapt to evolving challenges—all of which translate seamlessly into my work as a developer.
//                         I thrive in collaborative settings where innovation and problem-solving drive success.
//                     </p>

//                     <p className="text-2xl mb-6 text-white drop-shadow-md">
//                         What excites me most about software development is the opportunity to turn ideas into functional, impactful solutions.
//                         Whether it’s designing a dynamic front-end interface or engineering a robust back-end system,
//                         I am motivated by the potential to create applications that make people’s lives easier and more productive.
//                         I enjoy staying current with industry trends, learning new frameworks, and experimenting with emerging technologies to expand my skill set.
//                     </p>

//                     <p className="text-2xl mb-6 text-white drop-shadow-md">
//                         Beyond coding, I am deeply committed to fostering a positive work culture. I believe that great software is built through open communication,
//                         mutual respect, and a shared vision. My unique background gives me a fresh perspective on challenges,
//                         and I am eager to bring that enthusiasm to a team that values innovation and creativity. Together,
//                         I’m confident we can build software that inspires and empowers users. Let’s connect and build something amazing together!
//                     </p>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default Aboutme;