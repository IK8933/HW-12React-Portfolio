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