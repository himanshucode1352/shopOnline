import React, { useState } from "react";
import Layout from "../components/Layout";
import { toast } from "react-toastify";

const Register = () => {
  const [name,setName]= useState()
  const [email,setEmail]= useState()
  const [address,setAddress]= useState()
  const [number,setNumber]= useState()
  const [password,setPassword]= useState()
  const handleSubmit= ()=>{
console.log('hyyyyyyyyyyy')
toast.success()
  }
  return (
    <>
      <Layout>
        <div className="register">
          <h2>Register Here</h2>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter your Name"
                required
              /> 
            </div>
            <div className="mb-3">
              <input 
                type="email"
                className="form-control"
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
              />
              
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control" 
                onChange={(e)=>setAddress(e.target.value)}
                placeholder="Enter your Address"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                onChange={(e)=>setNumber(e.target.value)}
                placeholder="Enter your Phone number"
                required
              />
            </div>
           
            <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
           
            <button type="click" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
