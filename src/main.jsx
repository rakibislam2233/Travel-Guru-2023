import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Component/Layout/Main/Main.jsx';
import Home from './Component/Pages/Home/Home.jsx';
import News from './Component/Pages/Home/News.jsx';
import Destination from './Component/Pages/Home/Destination.jsx';
import Blogs from './Component/Pages/Home/Blogs.jsx';
import Contact from './Component/Pages/Home/Contact.jsx';
import ViewDetail from './Component/Pages/Home/ViewDetail.jsx';
import Booking from './Component/Pages/Home/Booking.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/news',
        element:<News></News>
      },
      {
        path:'/destination',
        element:<Destination></Destination>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'place/:id',
        element:<ViewDetail></ViewDetail>,
        loader:({params}) => fetch(`http://localhost:5000/place/${params.id}`)
      },
      {
        path:'/hotel',
        element:<Booking></Booking>,
        loader:() => fetch('http://localhost:5000/hotel')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
