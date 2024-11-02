import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";

const SignUp = ({onSuccess}) => {
  const [SignInfo, SetsignInfo] = useState({
    name: "",
    email: "",
    password: "",
    number :"",
  });
  const navigate = useNavigate();
  
  const hadlerchange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const alldata = { ...SignInfo };
    alldata[name] = value;
    SetsignInfo(alldata);
  };

  // console.log("LOGIN INFO ->", SignInfo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password,number} = SignInfo;
    if (!name || !email || !password ||!number) {
      return handleError("error required all field");
    }
    try {
      const url = "http://localhost:8080/user/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SignInfo),
      });
      const result = await response.json();
     
      
      const {success,message,error}= result;
      if(success){
        handleSuccess("Register successfully");
        onSuccess();
        setTimeout(()=>{
          navigate('/Home');
        },1000);
        
      }else if(error && error.details && error.details.length>0){
        const detailss= error.details[0].message;
       
        handleError(detailss);
      } else{
        handleError(message);
       
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Create a Account...</h1>
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ width: "75%" }}>
          <div className="mb-3">
            <label htmlFor="name" class="form-label">
              Name
            </label>
            <input
              onChange={hadlerchange}
              type="text"
              value={SignInfo.name}
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoFocus
            />
          </div>
          <div class="mb-3">
            <label
              htmlFor="email"
              for="exampleInputEmail1"
              className="form-label"
            >
              Email address
            </label>
            <input
              onChange={hadlerchange}
              type="email"
              name="email"
              value={SignInfo.email}
              className="form-control"
              id="exampleInputEmail1"
              autoFocus
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={hadlerchange}
              name="password"
              value={SignInfo.password}
              autoFocus
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="mb-3">
            <label htmlFor="password" className="form-label">
              Phone_number
            </label>
            <input
              type="number"
              onChange={hadlerchange}
              name="number"
              value={SignInfo.number}
              autoFocus
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>


          <ToastContainer />
        </div>
      </form>
    </>
  );
};

export default SignUp;
