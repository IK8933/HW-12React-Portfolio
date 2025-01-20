import resumePDF from '../assets/IKessack_CV 2024.pdf';

const Resume = () => {
    return (
        <section className="p-8 bg-gray-600 text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">My Resume</h1>
            <p className="mb-4 dark:text-blue-500 text-blue-500">
                Click the button below to view or download my resume.
            </p>
            <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
            >
                View My Resume
            </a>
            <div className="mt-6">
                <iframe
                    src={resumePDF}
                    title="Ian Kessack's Resume"
                    className="w-full h-[600px] border-2 border-gray-300 rounded"
                ></iframe>
            </div>
        </section>
    );
};

export default Resume;