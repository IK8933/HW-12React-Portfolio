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
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Aboutme from './pages/Aboutme'; // Fixed case
import Resume from './pages/Resume';   // Fixed case
import Portfolio from './pages/Portfolio'; // Fixed case
import './index.css';

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