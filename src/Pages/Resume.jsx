import resumePDF from '../assets/IKessack_CV 2024.pdf';
const Resume = () => {
    return (
        <section className="p-8 bg-gray-100 text-center">
            <h1 className="text-3xl font-bold mb-4">My Resume</h1>
            <p className="mb-4">Click the button below to view or download my resume.</p>
            <a
                href={resumePDF} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                View My Resume
            </a>
        </section>
    );
};

export default Resume;


