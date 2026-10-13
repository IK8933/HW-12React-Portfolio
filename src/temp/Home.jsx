
import HeroSection from './HeroSection';
import { Link } from 'react-router-dom';

const Home = () => {
  const cardStyle = "bg-cyan-50 dark:bg-[#172B38]/95 border border-cyan-400 dark:border-cyan-700/40 p-6 rounded-xl shadow-[0_0_22px_rgba(34,211,238,0.22)] dark:shadow-xl";
  const headingStyle = "text-xl font-bold text-cyan-800 dark:text-cyan-400 mb-2";
  const textStyle = "text-sm text-slate-700 dark:text-slate-300";

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#0B1017]">
      <HeroSection />

      {/* Professional Intro */}
      <section className="text-center py-8 px-4 bg-transparent">
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          I&apos;m Ian Kessack &mdash; a full-stack developer with a background in biomedical science
          and years of experience solving problems in demanding, detail-oriented environments. I bring that same analytical mindset to software development,
          turning ideas and challenges into working applications.
        </p>
      </section>

      {/* Highlight Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto text-left mt-4">
        <div className={cardStyle}>
          <h3 className={headingStyle}>Full-Stack Development</h3>
          <p className={textStyle}>
            Responsive front ends, server-side applications, database integration, authentication, and API development.
          </p>
        </div>

        <div className={cardStyle}>
          <h3 className={headingStyle}>Technologies</h3>
          <p className={textStyle}>
            JavaScript • TypeScript • Python • React • Node.js • Express • MongoDB • PostgreSQL • GraphQL • REST APIs
          </p>
        </div>

        <div className={cardStyle}>
          <h3 className={headingStyle}>Tools & Deployment</h3>
          <p className={textStyle}>
            Git • GitHub • Vite • npm • AWS Amplify • Render • Vercel • Netlify
          </p>
        </div>
      </section>

      {/* Let's Collaborate Section */}
      <section className="mt-12 text-center py-8 bg-transparent">
        <h2 className="text-2xl text-cyan-800 dark:text-cyan-400 font-bold mb-4">
          Let’s Connect
        </h2>
        <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
          I’m currently seeking opportunities to contribute my full-stack development skills to a professional software team.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-cyan-400 hover:bg-cyan-300 text-[#0B1017] font-bold py-3 px-6 rounded-md transition-colors shadow-[0_0_14px_rgba(34,211,238,0.25)]"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
};

export default Home;
