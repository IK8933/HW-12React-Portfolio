
import { Link } from "react-router-dom";
import portraitImage from "../assets/MyPhoto3.png";

const Aboutme = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST APIs",
    "Git & GitHub",
    "Tailwind CSS",
  ];

  // 🚩 Shared styling for Light Mode and Dark Mode
  const cardStyle = "bg-cyan-50 dark:bg-[#172B38]/95 border border-cyan-400 dark:border-cyan-700/40 rounded-xl p-8 shadow-[0_0_22px_rgba(34,211,238,0.22)] dark:shadow-xl";
  const headingStyle = "text-2xl font-bold text-cyan-800 dark:text-cyan-400";
  const buttonStyle = "inline-block bg-cyan-400 hover:bg-cyan-300 text-[#0B1017] px-6 py-3 rounded-md font-bold transition-colors shadow-[0_0_14px_rgba(34,211,238,0.25)]";

  return (
    <main id="about" className="min-h-screen bg-slate-100 dark:bg-[#0B1017] text-slate-700 dark:text-slate-300 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* 🚩 Introduction and Portrait */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              About <span className="text-cyan-500 dark:text-cyan-400">Me</span>
            </h1>

            <h2 className="text-2xl font-semibold mb-5 text-cyan-800 dark:text-cyan-400">
              From Biomedical Science to Software Development
            </h2>

            <p className="text-lg leading-relaxed mb-5">
              I'm a full-stack software developer with a background in
              biomedical science and professional healthcare experience. My work
              in software development has involved JavaScript, TypeScript,
              React, Node.js, and database technologies, with projects ranging
              from interactive web applications to systems involving user
              authentication and data management.
            </p>

            <p className="text-lg leading-relaxed mb-5">
              My experience in healthcare taught me to solve complex problems,
              work accurately under pressure, and communicate effectively with
              different teams. I carry those skills into software development,
              where I enjoy working through technical challenges and figuring
              out how to make things work.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              I'm currently looking for an opportunity to join a software
              development team where I can contribute what I've learned, gain
              experience working alongside other developers, and continue
              improving my skills.
            </p>

            {/* 🚩 Navigation Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/Portfolio" className={buttonStyle}>
                View My Projects
              </Link>

              <Link
                to="/Contact"
                className="inline-block bg-cyan-50 dark:bg-[#172B38]/95 hover:bg-cyan-100 dark:hover:bg-[#203A4A] text-cyan-800 dark:text-cyan-400 px-6 py-3 rounded-md font-bold border border-cyan-400 dark:border-cyan-700/40 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* 🚩 Professional Portrait */}
          <div className="w-56 md:w-64 shrink-0">
            <img
              src={portraitImage}
              alt="Ian Kessack professional portrait"
              className="w-full aspect-square object-cover rounded-2xl shadow-lg border-4 border-cyan-400 dark:border-cyan-700/40"
            />
          </div>
        </section>

        {/* 🚩 Professional Background */}
        <section className={`${cardStyle} mb-8`}>
          <h2 className={`${headingStyle} mb-4`}>
            My Approach to Programming
          </h2>

          <p className="text-lg leading-relaxed">
            One of the things I enjoy most about programming is the process of
            figuring things out. I like breaking larger problems into smaller
            pieces, testing different approaches, and understanding why
            something works rather than simply getting it to work. Some of my
            most rewarding experiences have come from running into problems I
            didn't initially know how to solve and working through them until I
            found a solution.
          </p>
        </section>

        {/* 🚩 Technical Skills */}
        <section className={cardStyle}>
          <h2 className={`${headingStyle} mb-6`}>
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-white dark:bg-[#0B1017] text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg text-sm font-medium border border-cyan-300 dark:border-cyan-700/40"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default Aboutme;
