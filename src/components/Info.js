import React from 'react'

import Slider from './Slider'
import { SliderData } from './SliderData'

const Info = () => {
  return (
    
    <div className='informacion'>
          <h1 className='bold yoText'>Mi nombre el Pablo Auterio</h1>
        
          <Slider slides={SliderData} />
    
    
    
    </div>
  )
}

export default Info