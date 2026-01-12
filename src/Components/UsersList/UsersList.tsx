import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPen, FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


export default function UsersList() {
  const navigate= useNavigate();
  const [show, setShow] = useState(false);
  const [user,setUser]=useState({});
  let [users, setUsers] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = (user:any) =>{ 
    setUser(user);
    setShow(true)
  };
  const handleUpdate=(user:any)=>{
    navigate(`/home/user-add/${user.id}`,
      {
        state:user
      }
    )
  }
  const deleteUser=async ()=>{
    try {
        let response= await axios.delete(`https://dummyjson.com/users/${user.id}`);
        console.log(response);
        handleClose()
        toast.success(`${user.firstName} deleted successfully!`)
    } catch (error) {
      toast.error(`error`)
    }
  }
  useEffect(() => {
    axios.get('https://dummyjson.com/users').then((res) => setUsers(res.data.users))
  }, [])
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={deleteUser}>
            Yes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container-fluid bg-light pt-5">
        <div className="row justify-content-between">
          <div className="col-3">
                              <h1>Users List</h1>
          </div>
          <div className="col-3 align-self-center">
            <Link to='/home/user-add' className='text-decoration-none'>
            <div className="bg-warning text-center rounded-3 text-white w-75 mx-auto h4 py-3 ">Add User</div>
            </Link>
          </div>
        </div>
        <table className="table mt-5">
          <thead>
            <tr className=''>
              <th scope="col" className="col-1"></th>
              <th scope="col" className="col-2 text-center">Name</th>
              <th scope="col" className="col-2 text-center">Email</th>
              <th scope="col" className="col-2 text-center">Phone</th>
              <th scope="col" className="col-2 text-center  d-md-table-cell d-none">Ip</th>
              <th scope="col" className="col-2 text-center  d-md-table-cell d-none">Date of Birth</th>
              <th scope="col" className="col-1 text-center"></th>

            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr className=''>
                <td>
                  <img src={user.image} className='rounded-4 w-100' alt="" />
                </td>
                <td className=''>
                  <div className="content">{user.firstName} {user.lastName}</div>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className=' d-md-table-cell d-none'>{user.ip}</td>
                <td className=' d-md-table-cell d-none'>{user.birthDate}</td>
                <td className=''>
                  <FaPen onClick={()=>handleUpdate(user)} />
                  <span className='mx-2'></span>
                  <FaTrash onClick={()=>handleShow(user)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
