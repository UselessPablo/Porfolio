import React from 'react'
import {Outlet} from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer'
import Login from '../components/Login';
import Registration from '../components/Registration';
import Home from '../components/Home'

const Layout = () => (
  

  
  
       <>
       <Home />
      <Outlet />
      
    {/* <Registration/> */}
     
      
    </>
  )


export default Layout
