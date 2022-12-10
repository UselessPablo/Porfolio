import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Html from '../components/Html'
import Layout from './Layout';
import Conocimientos from "../components/Conocimientos";
import Javasc from "../components/Javasc";
import Login from "../components/Login";
import Info from "../components/Info";
import SingUp from '../components/SignUp'
import NavBar from '../components/NavBar'
import Registration from "../components/Registration";
import Home from "../components/Home";



const Router = () => {
  return (
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Layout/>}>
        </Route>
          <Route path='/pages/login/' element={<Login/>} />
          <Route path='/pages/home/' element={<NavBar/>} />
          <Route path='/registration/' element={<Registration/>} />
          
       
      </Routes>
    </BrowserRouter>
   
  )
}

export default Router