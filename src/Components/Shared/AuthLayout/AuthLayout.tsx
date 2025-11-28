import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <>
    <div className="container-fluid Auth-Container">
      <div className="row justify-content-center min-vh-100 align-items-center">
        <div className="col-10 col-md-6 col-lg-4">
              <Outlet/>
        </div>
      </div>
    </div>
    </>
  )
}
