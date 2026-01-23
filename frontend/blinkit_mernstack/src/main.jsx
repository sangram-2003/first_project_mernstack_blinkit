import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
const router = createBrowserRouter([
  {
   path:"/",
   element:<App/>,
   children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:'login',
      element:<Login/>,
      
    }
   ]
  }
]);

createRoot(document.getElementById('root')).render(
  
      <RouterProvider router={router}/>
  
);
