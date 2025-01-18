import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Aboutme from './Pages/Aboutme';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, // Default error handling for routing issues
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <Aboutme />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
