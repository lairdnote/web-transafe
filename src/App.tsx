import React from 'react';
import Welcome from './views/Welcome';
import MainLayout from './components/MainLayout'
import ReactDOM from "react-dom/client";
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
    path: "/buy",
    element: <About />,
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
