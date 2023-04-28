import React from 'react';
import Welcome from './views/Welcome';
import Policy from './views/Policy'
import About from './views/About'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
]);

const  App = () =>  {
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
