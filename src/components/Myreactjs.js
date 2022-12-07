import React from 'react'
import javas from '../img/javasc.png'
import html from '../img/desarrollo.png'
import certReact from '../img/react.png'


const Myreactjs = () => {
  return (
    <div className='certificados'>
   
    <img className='certif' src={javas}  alt='certificados'/>
          <img className='certif' src={html} alt='certificados' />
          <img className='certif' src={certReact} alt='certificados' />

    
    </div>
  )
}

export default Myreactjs