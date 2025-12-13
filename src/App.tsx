import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import UsersList from './Components/UsersList/UsersList'
import UserData from './Components/UserData/UserData'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './Components/Shared/AuthLayout/AuthLayout'
import MasterLayout from './Components/Shared/MasterLayout/MasterLayout'
import UserProfile from './Components/UserProfile/UserProfile'
import { ToastContainer, toast } from 'react-toastify';
import AddUser from './Components/addUser/AddUser'


function App() {
  const notify = () => toast('Wow so easy !');
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
      {path:'user-add',element:<AddUser/>},
      {path:'user-add/:id',element:<AddUser/>},
      {path:'user-data',element:<UserData/>},
      {path:'user-profile',element:<UserProfile/>},
    ]
  }
  ]
  )
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </>
  )
}

export default App
