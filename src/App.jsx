import Navbar from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="flex flex-col h-screen bg-gray-50 text-black">
            {/* Navbar */}
            <Navbar />
            {/* Page Content */}
            <main className="flex-grow">
                <Outlet />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;


