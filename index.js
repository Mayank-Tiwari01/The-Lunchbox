import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import Body from './src/components/Body';
import NonVeg from './src/components/NonVeg';
import PureVeg from './src/components/PureVeg';
import ResMenu from './src/components/ResMenu';
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
      },
      {
        path : '/NonVeg',
        element : <NonVeg/>
      },
      {
        path : '/PureVeg',
        element : <PureVeg/>
      },
      {
        path : '/Restaurants/:resId',
        element : <ResMenu/>
      }
    ],
    errorElement : <Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={reactRoute} />);
