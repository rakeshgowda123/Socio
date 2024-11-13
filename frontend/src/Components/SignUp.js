import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";

const SignUp = ({ onSuccess }) => {
  const [signInfo, setSignInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = signInfo;
    
    if (!name || !email || !password) {
      return handleError("All fields are required");
    }
    
    if (name === email) {
      return handleError("Name and email cannot be the same");
    }

    try {
      const response = await fetch("https://socio-cvcx.onrender.com/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInfo),
      });
      
      const result = await response.json();
      const { success, message, error } = result;
      
      if (success) {
        handleSuccess("Register successfully");
        onSuccess();
        setTimeout(() => {
          navigate('/Home');
        }, 1000);
      } else if (error?.details?.[0]?.message) {
        handleError(error.details[0].message);
      } else {
        handleError(message || 'Registration failed');
      }
    } catch (err) {
      handleError(err.message || 'An error occurred');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Create an Account</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={signInfo.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={signInfo.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={signInfo.password}
                    onChange={handleChange}
                    placeholder="Set your password"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
