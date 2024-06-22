import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import Body from './src/components/Body';
const reactRoute = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Body/> 
      },
      {
        path : '/About',
        element : <About/>
      },
      {
        path : '/Contact-Us',
        element : <Contact/>
      }
    ],
    errorElement : <Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={reactRoute} />);
