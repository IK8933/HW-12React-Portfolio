
import resumePDF from '../assets/Ian_Kessack_Resume 2026.pdf';

const Resume = () => {
  return (
    <section className="min-h-screen bg-slate-100 dark:bg-[#0B1017] text-slate-900 dark:text-slate-100 px-4 py-12 md:px-8">
      {/* 🚩 Page heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-slate-900 dark:text-white">
          MY <span className="text-cyan-500 dark:text-cyan-400">RESUME</span>
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Explore my professional experience, technical skills, and qualifications.
        </p>
      </div>

      {/* 🚩 Resume container */}
      <div className="max-w-5xl mx-auto bg-cyan-50 dark:bg-[#172B38]/95 border border-cyan-400 dark:border-cyan-700/40 rounded-xl shadow-[0_0_22px_rgba(34,211,238,0.22)] dark:shadow-xl p-6 md:p-8">
        {/* 🚩 Resume heading and buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-cyan-800 dark:text-white">
              PROFESSIONAL RESUME
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              View my resume below or download a copy.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-400 hover:bg-cyan-300 text-[#0B1017] font-bold py-3 px-5 rounded-md transition-colors shadow-[0_0_14px_rgba(34,211,238,0.25)]"
            >
              View Resume
            </a>
            <a
              href={resumePDF}
              download="Ian_Kessack_Resume.pdf"
              className="inline-block bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-3 px-5 rounded-md transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* 🚩 Embedded PDF preview */}
        <div className="bg-white rounded-lg overflow-hidden border border-cyan-300 dark:border-slate-600">
          <iframe
            src={resumePDF}
            title="Ian Kessack's Resume"
            className="w-full h-[700px] md:h-[850px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
