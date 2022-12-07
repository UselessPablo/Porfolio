import React from 'react'
import { Link } from 'react-router-dom'
const Conocimientos = () => {
  return (
    <div className='activ'>
   <h2> 
         
        <Link to='/html'><ol>HTML y Css</ol></Link>    
         
        <Link to='/javascript'><ol>Javascript</ol> </Link>   
        <Link to= '/myreactjs'> <ol> React Js</ol></Link>   
          </h2>
    </div>
  )
}

export default Conocimientos