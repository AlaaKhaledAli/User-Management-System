import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddUser() {
  const {id}=useParams();
  const {state:user}=useLocation();
  const [pageDetails,setPageDetails]=useState({
    pageTitle:'Add User',
    formBtn:"Save",
    API:`https://dummyjson.com/users/add`
  });
  let {
    register,
    handleSubmit,
    formState:{errors}
  }=useForm();
  useEffect(
    ()=>{
    if (id){
      setPageDetails({...pageDetails,
    pageTitle:'Update User',
    formBtn:"Update",
    API:`https://dummyjson.com/users/${id}`
  })
    }
    console.log(user);
    
  },[])
  const onSubmit=async (data:any)=>{
    try {
      let response=await axios.post(pageDetails.API,data)
      console.log(response.data);
      toast.success('Login Successful!');
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      <div className="container-fluid bg-light ">
        <h1>{pageDetails.pageTitle}</h1>
        <div className="row justify-content-center">
          <div className="col-lg-9 col-11 mt-5 " onSubmit={handleSubmit(onSubmit)}>
            <form className="bg-white py-5 rounded-3 shadow">
              <div className="row justify-content-center gap-3">
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="first-name" className="form-label">First Name</label>
                    <input type="text" className="bg-secondary-subtile form-control" id="first-name" name="firstName" aria-describedby="emailHelp" placeholder="Enter your First Name" value={user&&user.firstName} />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="last-name" className="form-label">Last Name</label>
                    <input type="text" className="bg-secondary-subtile form-control" id="last-name" name="lastName" placeholder="Enter your Last Name" value={user&&user.lastName}/>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="bg-secondary-subtile form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter your Email" value={user&&user.email} />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="text" className="bg-secondary-subtile form-control" id="age" name="age" aria-describedby="emailHelp" placeholder="Enter your Age" value={user&&user.age}/>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="number" className="form-label">Phone Number</label>
                    <input type="tel" className="bg-secondary-subtile form-control" id="number" name="number" aria-describedby="emailHelp" placeholder="Enter your Phone Number" value={user&&user.phone}/>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="BoD" className="form-label">birth Date</label>
                    <input type="text" className="bg-secondary-subtile form-control" id="DoB" name="DoB" aria-describedby="emailHelp" placeholder="Enter your birth Date" value={user&&user.ip} />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-warning w-50 mx-auto d-block">{pageDetails.formBtn}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}