import React from 'react'
import {Outlet} from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer'

const Layout = () => {
  return (
       <>
      <Navbar />
      <Footer/>
      <Outlet />
    </>
  )
}

export default Layout