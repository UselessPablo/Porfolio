import React from 'react'
import yo from '../img/gráfico 1_20221207_203717.png'
import Slider from './Slider'
import { SliderData } from './SliderData'

const Info = () => {
  return (
    <div className='informacion'>
    
    <img className='yo' src={yo} alt='foto'/>
          <Slider slides={SliderData} />
    <p className='bold yoText'>Mi nombre el Pablo Auterio</p>
    {/* <p className='bold yoText'>Vivo en San Carlos de Bariloche</p> */}
    
    </div>
  )
}

export default Info