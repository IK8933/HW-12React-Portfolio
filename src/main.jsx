import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Aboutme from './pages/Aboutme.jsx';
import Resume from './pages/Resume.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Error from './pages/Error.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, // Ensure the Error component exists and is correctly imported
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