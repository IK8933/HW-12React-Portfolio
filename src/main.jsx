// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.jsx';
// import Error from './pages/Error';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Aboutme from './Pages/Aboutme';
// import Resume from './Pages/Resume';
// import Portfolio from './Pages/Portfolio';
// import './index.css';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />, 
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: '/About',
//         element: <Aboutme />,
//       },
//       {
//         path: '/Portfolio',
//         element: <Portfolio />,
//       },
//       {
//         path: '/Contact',
//         element: <Contact />,
//       },
//       {
//         path: '/Resume',
//         element: <Resume />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './pages/Error'; // Ensure this matches the exact file name and path
import Home from './pages/Home';
import Contact from './pages/Contact';
import Aboutme from './pages/Aboutme'; // Correct casing here
import Resume from './pages/Resume'; // Correct casing here
import Portfolio from './pages/Portfolio'; // Correct casing here
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