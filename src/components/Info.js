import React from 'react'
import Loader from './Loader'
import { useState } from 'react'
import Slider from './Slider'
import { SliderData } from './SliderData'
import Footer from './Footer'
import Works from './Works'
const Info = () => {
 
  const [load, setLoad]= useState(true);
    
  setTimeout(() => {
    setLoad(true)?
    <Loader />:setLoad(false)
    }, 4500);

  return (
   <>
    {(
      load ? <Loader/> : 
    
    <div className='informacion'>
          <h1 className='bold yoText'>Mi Nombre Es Pablo Auterio</h1>
          <Slider slides={SliderData} />
      
      <Works/>
      <Footer/>
    </div>
    
      )}
    
    </>
    
  )
}

export default Info