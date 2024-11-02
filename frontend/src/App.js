import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import {Navigate, Route,Routes} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import RefreshHandler from './Components/RefreshHandler';
import UserData from './Components/UserData';
import Landingpage from './Components/Landingpage';

function App() {
  const [isAuthenticated,setidAuthenticated]= useState(false);
  const PrivateRoute = ({element})=>{
    return isAuthenticated? element: <Navigate to="/"/>
  }

  return (
    <>
    <RefreshHandler setidAuthenticated={setidAuthenticated} />
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/'element={<Landingpage/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/userdata'element={<UserData/>}/>
        
        <Route path='/home' element={<PrivateRoute element={<Landingpage/>}/>} />
      </Routes>
    </>
  );
}

export default App;
