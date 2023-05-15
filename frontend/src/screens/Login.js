import React, { useState } from "react";
import Layout from "../components/Layout";
import { toast } from "react-toastify";
import { requstHandler } from "../components/helper";

const Login = () => {
  const [email,setEmail]= useState()
  const [password,setPassword]= useState()
  const handleSubmit= async(e)=>{
    e.preventDefault()
    console.log('object')
try {
  let data={
    email:email,
    password:password,
  
  }
 const result= await requstHandler('user/login','post',data)
 console.log('result',result)
 toast.success(result.msg)
} catch (error) {
  console.log(error.message)
  toast.error(error.message)
}

  }
  return (
    <>
      <Layout>
        <div className="register">
          <h2>Login Here</h2>
          <form>
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
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
           
            <button type="click" className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
