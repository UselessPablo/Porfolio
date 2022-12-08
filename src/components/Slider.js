import React from 'react'
import { useState } from 'react';
import { SliderData } from './SliderData';
import left from '../img/left.svg'
import right from '../img/right.svg'


const Slider = ({slides}) => {
  const [current, setCurrent]=useState(0);
  const length = slides.length
    

const autoSlide = ()=>{
    setCurrent(current === length-1 ? 0 : current + 1)
}

const autoPlay = ()=>{
    setInterval(() => {
        autoSlide()
    }, 5000);
}
    autoPlay()
   
    return (
   <section>
  
    {SliderData.map((slide, index)=>{
        
        return(
            <div className='sliderslider'>
            <div className={index === current ? 'slide act' : 'slide'} key={index}>
                {index === current && (<img className='sliderImg' src={slide.image} alt='imagenes varias' />)}
                <p className='centerText sliderImg'>{slide.titulo}</p>
            </div>
            </div>
        )
            
            
          
        
    })}
   </section>
  )
}


export default Slider;