import React from 'react'
import whats from '../img/whats.png'
import link from '../img/link.png'
import git from '../img/gith.png'



const Footer = () => {
  return (
    <div className='foot'>
          <a className='link' href='https://www.whatsapp.com/' target="_blank" rel="noreferrer" ><img className='footImg' src={whats} alt='whatsapp logo' /></a>
          <a className='link' href='https://www.linkedin.com/in/pablo-auterio-60a83149' target="_blank" rel="noreferrer" ><img className='footImg' src={link} alt='linkedin Logo' /></a>
          <a className='link' href='https://github.com/UselessPablo' target="_blank" rel="noreferrer" ><img className='footImg' src={git} alt='Github logo' /></a>
          
    </div>
  )
}

export default Footer