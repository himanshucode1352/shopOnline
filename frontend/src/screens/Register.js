import React from "react";
import Layout from "../components/Layout";

const Register = () => {
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
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
              
                placeholder="Enter your Email"
                required
              />
              
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Address"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Phone number"
                required
              />
            </div>
           
            <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                  required
                />
              </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
