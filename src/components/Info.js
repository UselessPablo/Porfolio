import React from 'react'

import Slider from './Slider'
import { SliderData } from './SliderData'

const Info = () => {
  return (
    
    <div className='informacion'>
          <p className='bold yoText'>Mi nombre el Pablo Auterio</p>
          
          <p className='bold yoText'>Vivo en San Carlos de Bariloche</p>
   
          <Slider slides={SliderData} />
    
    
    
    </div>
  )
}

export default Info