import React, { useEffect } from 'react'
import { replace, useLocation, useNavigate } from 'react-router-dom'

function RefreshHandler({setidAuthenticated}) {
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(()=>{
        if(localStorage.getItem('jwtToken')){
            setidAuthenticated(true);
            if(location.pathname ==='/'||
                 location.pathname ==='/login'
                 || location.pathname==='/signup'){
                navigate('/home');
            }
        }
    },[location,navigate,setidAuthenticated])
  return (
    <div></div>
  )
}

export default RefreshHandler