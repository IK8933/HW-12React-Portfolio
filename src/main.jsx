import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/App.jsx';
import Home from '@/temp/Home.jsx';
import Contact from '@/temp/Contact.jsx';
import Aboutme from '@/temp/Aboutme.jsx';
import Resume from '@/temp/Resume.jsx';
import Portfolio from '@/temp/Portfolio.jsx';
import Error from '@/temp/Error.jsx';

import '@/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, 
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about', // Updated path to be consistent with routing conventions
        element: <Aboutme />,
      },
      {
        path: 'portfolio', // Updated path to be consistent with routing conventions
        element: <Portfolio />,
      },
      {
        path: 'contact', // Updated path to be consistent with routing conventions
        element: <Contact />,
      },
      {
        path: 'resume', // Updated path to be consistent with routing conventions
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
