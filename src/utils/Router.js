import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from './Layout';
import Login from "../components/Login";
import NavBar from '../components/NavBar'
import Registration from "../components/Registration";




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