const Error = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-6">The page you are looking for does not exist.</p>
            <a href="/" className="text-blue-500 hover:text-blue-700">
                Go Back to Home
            </a>
        </div>
    );
};

export default Error;