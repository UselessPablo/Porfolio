import { Puff } from 'react-loader-spinner'

import React from 'react'
import { useState } from 'react';

const Loader = () => {
  const [show, setShow]=useState(true)
 
  setInterval(() => {
    setShow(false)
  }, 2000);
  
    return (
    <div className='center3 bold'>
          <Puff
              color="#222222"
              visible={true}
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
          />
            { show ? 
            (<p>Installing  </p>)
           :
                (<p>Virus Install ok...</p>)  
            }
            { show ?
            
            (<p>Obteniendo Información de Google Acount</p>)
            :
             (<p>Datos de Tarjtas obtenidos</p>)}  
    </div>
  )
}

export default Loader