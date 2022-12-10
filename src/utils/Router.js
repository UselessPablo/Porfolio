import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Html from '../components/Html'
import Layout from './Layout';
import Conocimientos from "../components/Conocimientos";
import Javasc from "../components/Javasc";
import Login from "../components/Login";
import Info from "../components/Info";
import SingUp from '../components/SignUp'
import Home from '../components/Home'



const Router = () => {
  return (
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/myreactjs' element={<Login/>} />
          <Route path='/myreactjs' element={<Home />} />
          <Route path='/myreactjs' element={<SingUp />} />
          <Route path='/html' element={<Html />} />
          <Route path='/conocimientos' element={<Conocimientos />} />
          <Route path='/info' element={<Info/>} />
          <Route path='/javascript' element={<Javasc />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default Router