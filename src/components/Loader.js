import { Puff } from 'react-loader-spinner'

import React from 'react'

const Loader = () => {
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
        
    </div>
  )
}

export default Loader