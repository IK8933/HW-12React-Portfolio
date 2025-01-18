import { Outlet } from 'react-router-dom';
import Navbar from './components/Header';
import Footer from './components/Footer';
function App() {

  return (
    
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-500">
        <Outlet />
        </main>
        <Footer />
      </div>

  );
}

export default App
