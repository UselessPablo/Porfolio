import React from 'react'

import Slider from './Slider'
import { SliderData } from './SliderData'

const Info = () => {
  return (
    
    <div className='informacion'>
          <p className='bold yoText'>Mi nombre el Pablo Auterio</p>
          
          
   
          <Slider slides={SliderData} />
    
    
    
    </div>
  )
}

export default Info