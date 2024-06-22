import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/components/app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './src/components/About';

const reactRoute = createBrowserRouter([
  {
    path : '/',
    element : <App/>
  },
  {
    path : '/About',
    element : <About/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={reactRoute} />);
