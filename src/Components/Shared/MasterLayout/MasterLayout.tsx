import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'

export default function MasterLayout() {
  return (
    <>
    <div className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        <div className="sidebar-col col">
          <SideBar/>
        </div>
        <div className="col-md-9 flex-grow-1 align-items-stretch col-12 bg-light">
          <Navbar/>
          <Outlet/>
        </div>
      </div>
    </div>
    </>
  )
}
