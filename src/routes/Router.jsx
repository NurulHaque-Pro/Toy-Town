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
import Blog from '../components/Pages/Blog/Blog';
import Page404 from '../components/Pages/Page404';

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
          element: <MyToys></MyToys>
        },
        {
          path: '/addtoy',
          element: <AddToy></AddToy>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: <Page404></Page404>
    }
  ]);

  export default router;