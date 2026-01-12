import React, { useContext, useState } from 'react'
import { BiColorFill, BiPointer } from 'react-icons/bi'
import { FaBars, FaHome, FaList, FaPlus } from 'react-icons/fa'
import { FaFaceAngry, FaPerson } from 'react-icons/fa6'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import profileImg from '../../../assets/image.png'
import { AuthContext } from '../../../context/AuthContext'
import { Collapse } from 'react-bootstrap'
export default function SideBar() {
  const [isCollapsed,setIsCollapsed]=useState();
  const toggleCollapse=()=>{
    setIsCollapsed((!isCollapsed))
  }
  let {loginData}=useContext(AuthContext);
  return (
    <>
      <Sidebar collapsed={isCollapsed} className='px-sm-2 my-5 mx-auto' breakPoint='md' width='300px'  collapsedWidth="80px">
        <Menu>
          <div className="d-flex px-4 justify-content-between align-items-center w-100 flex-wrap">
        <h1 className={`${isCollapsed?"p-0 fs-6":"ps-3"} border-start border-warning border-3`}>UMS</h1>
          <FaBars fontSize={isCollapsed?25:40} onClick={toggleCollapse} style={{ cursor: "pointer" }}/>
      </div>
      {!isCollapsed&&
                <div className="info d-flex flex-column align-items-center">
            <img src={loginData.image} alt="" className="thumbnail rounded-circle mx-auto " />
            <h2 className='h3 my-3'>{loginData.firstName}</h2>
            <h3 className='h6 text-warning'>Admin</h3>
          </div>
      }
          <MenuItem component={<Link to="/home" />} icon={<FaHome />}> Home</MenuItem>
          <MenuItem component={<Link to="/home/user-list" />} icon={<FaList />}> Users</MenuItem>
          <MenuItem component={<Link to="/home/user-add" />} icon={<FaPlus />}> Add user</MenuItem>
          <MenuItem component={<Link to="/home/user-add" />} icon={<FaFaceAngry />}> Profile</MenuItem>
        </Menu>
      </Sidebar>
      </>
      )
}
