

import React from 'react'
import Conocimientos from './Conocimientos'
import html from '../img/desarrollo.png'

const Html = () => {
  return (
   <>
    <Conocimientos/>
    
    <div className='htmlSection'>
    <p className='parrafo fadeIn'>Conocimientos avanzados en HTML5 y Css. Cursado y finalizado en año 2022, plataforma on-line CoderHouse</p>
       <div >  
          <a className='link' href='https://uselesspablo.github.io/repoMartesCoder/' target="_blank" rel="noreferrer" >Link Proyecto</a>
        </div>
       <img className='cert animate' src={html} alt='cert html' />
    </div>
    </>
  )
}

export default Html


