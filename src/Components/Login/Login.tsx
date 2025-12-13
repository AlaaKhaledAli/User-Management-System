import React, { useContext } from 'react'
import styles from './Login.module.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
  let navigate=useNavigate();
  let {saveLoginData}=useContext(AuthContext);
  let {
    register,
    handleSubmit,
    formState:{errors}
  }=useForm();
  const onSubmit=async (data:any)=>{
    try {
      let response= await axios.post('https://dummyjson.com/user/login', data);
      localStorage.setItem("token",response.data.accessToken)
      saveLoginData();
      toast.success('Login Successful!');
      navigate('/home/user-list');
    } catch (error:any) {
      console.log(error.message);
      toast.error(`Login Failed. ${error.message}`);
    }
  }
  return (
    <>
      <div className="rounded bg-white p-4 text-center">
        <h1 className='border-start border-warning ps-2 h4 mb-5 border-4 text-start'>User Management System</h1>
        <h2 className='h5'>Sign In</h2>
        <p>Enter your credentials to access your account</p>
        <form className='text-start' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label text-secondary fw-medium fs-6">Email</label>
            <input type="text" {...register("username")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email' />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-secondary fw-medium fs-6">Password</label>
            <input type="password"  {...register("password")}  className="form-control" id="exampleInputPassword1" placeholder='Enter your password' />
            <div id="emailHelp" className="form-text"></div>

          </div>
          <button type="submit" className="btn w-100 bg-warning text-white text-uppercase">Sign in</button>
        </form>
      </div>
    </>
  )
}
