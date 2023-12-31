/* eslint-disable no-unused-vars */
import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../components/Main/Main';
import Home from '../components/Home/Home';
import AllToys from '../components/Pages/AllToys/AllToys';
import MyToys from '../components/Pages/MyToys/MyToys';
import AddToy from '../components/Pages/AddToy/AddToy';
import Page404 from '../components/Pages/Page404';
import Login from '../components/Pages/Login/Login';
import SignUp from '../components/Pages/SignUp/Signup';
import PrivetRoute from './PrivetRoute';
import Update from '../components/Pages/MyToys/Update';
import ToyInfo from '../components/Pages/ProductDetails/ToyInfo';
import Blogs from '../components/Pages/Blog/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/mytoys',
        element: <PrivetRoute><MyToys></MyToys></PrivetRoute>
      },
      {
        path: '/addtoy',
        element: <PrivetRoute><AddToy></AddToy></PrivetRoute>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://toy-town-server-nurulhaque-pro.vercel.app/blogs/')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/update/:id',
        element: <PrivetRoute><Update></Update></PrivetRoute>,
        loader: ({ params }) => fetch(`https://toy-town-server-nurulhaque-pro.vercel.app/toys/${params.id}`)
      },
      {
        path: '/toyinfo/:id',
        element: <PrivetRoute><ToyInfo></ToyInfo></PrivetRoute>,
        loader: ({ params }) => fetch(`https://toy-town-server-nurulhaque-pro.vercel.app/toys/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    element: <Page404></Page404>
  }
]);

export default router;