import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Shared/Sidebar/Sidebar'
import Login from './Components/Login/Login'
import Navbar from './Components/Shared/Navbar/Navbar'
import UsersList from './Components/UsersList/UsersList'
import UserData from './Components/UserData/UserData'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './Components/Shared/AuthLayout/AuthLayout'
import MasterLayout from './Components/Shared/MasterLayout/MasterLayout'
import UserProfile from './Components/UserProfile/UserProfile'

function App() {
  const routes = createBrowserRouter(
    [{
      path:'',
      element:<AuthLayout/>,
      children:[
        {index:true,element:<Login/>},
        {path:'login',element:<Login/>},
      ]
    },
  {
    path:'home',
    element:<MasterLayout/>,
    children:[
      {index:true,element:<UsersList/>},
      {path:'user-list',element:<UsersList/>},
      {path:'user-list',element:<UsersList/>},
      {path:'user-data',element:<UserData/>},
      {path:'user-profile',element:<UserProfile/>},
    ]
  }
  ]
  )
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
