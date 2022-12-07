
import React from 'react'
import { Link } from 'react-router-dom'
import certReact from '../img/react.png'
const MyReact = ({data,data2,data3}) => {
 
  return (
    <div className='center2'>
   
    <div className='center2'>
    <h3>Bienvenido</h3>
    </div>
      <img className='cert2' src={certReact} alt='certificado de React' />
    <div className='myReact'>
      <p>Nombre: {data}</p><p>Apellido: {data2}</p><p>Email: {data3}</p>
        
    </div>
     
      <div className='right'>
        <Link to='/conocimientos'>Back</Link>
      </div>
      Presentación en React Js
    </div>
  )
}

export default MyReact