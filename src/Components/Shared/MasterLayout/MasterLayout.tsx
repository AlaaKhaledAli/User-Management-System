import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 bg-primary">
          <Sidebar/>
        </div>
        <div className="col-md-3 bg-warning">
          <Navbar/>
          <Outlet/>
        </div>
      </div>
    </div>
    </>
  )
}
