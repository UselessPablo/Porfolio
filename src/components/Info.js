import React from 'react'
import Loader from './Loader'
import { useState } from 'react'
import Slider from './Slider'
import { SliderData } from './SliderData'

const Info = () => {
  const [load, setLoad]= useState(true);
    
  setTimeout(() => {
    setLoad(true)?
    <Loader />:setLoad(false)
    }, 4000);

  
  
  return (
   <>
  
    {(
      load ? <Loader/>: 
    
    
    <div className='informacion'>
          <h1 className='bold yoText'>Mi Nombre Es Pablo Auterio</h1>
        
          <Slider slides={SliderData} />
  
    </div>
    
    )}
    
    </>
    
  )
}

export default Info