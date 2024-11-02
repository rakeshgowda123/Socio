import React, { useState } from "react";
import { handleError, handleSuccess } from "../util";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = ({onSuccess}) => {
  const [LoginInfo, SetloginInfo] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleLogin = (e) => {
    const {name,value}= e.target;
    console.log(e.target.value);
    const loginData = {...LoginInfo}
    loginData[name] = value;
    SetloginInfo(loginData);
  };
//   console.log(LoginInfo);
  
  const handleLoginSubmit = async (e)=>{
    e.preventDefault();
    console.log("submit");
    
    const {email,password} = LoginInfo;

    if(!email || !password){
        handleError("Pls fill the all  reuired data");
        return;
    }
    
    try{
        const url = "http://localhost:8080/user/login";
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(LoginInfo),
        });
        const data = await response.json();
        console.log(data);
        const {success,name,jwtToken,message,error} = data;

        if(success){
            localStorage.setItem('name',name);
            localStorage.setItem('jwtToken',jwtToken);
            handleSuccess("Login success");
            onSuccess();
            setTimeout(()=>{
                navigate('/home');
            },1000)
        }
        else if(error && error.details && error.details.length>0){
            const errorData = error.details[0].message;
            handleError(errorData);
        }
        else{
            handleError(message ||'an encounter');
        }

    }catch(err){
        handleError(err);
    }

  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login to Socio....😊</h1>
      <form onSubmit={handleLoginSubmit}>
        <div className="container" style={{ width: "75%" }}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              value={LoginInfo.email}
             onChange={handleLogin}
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              value={LoginInfo.password}
              onChange={handleLogin}
              type="password"
              name="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
          
          <ToastContainer />
        </div>
      </form>
    </>
  );
};
export default Login;
